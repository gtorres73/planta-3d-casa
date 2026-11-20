import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'versoes');

await fs.mkdir(outDir, { recursive: true });

const [htmlRaw, cssRaw] = await Promise.all([
  fs.readFile(path.join(rootDir, 'index.html'), 'utf8'),
  fs.readFile(path.join(rootDir, 'src', 'styles', 'main.css'), 'utf8')
]);

// Strip conditional dynamic imports of polyfills when bundling classic single-file IIFE
const portablePolyfillStripper = {
  name: 'portable-polyfill-stripper',
  setup(pluginBuild) {
    pluginBuild.onResolve({ filter: /^(invokers-polyfill|@oddbird\/popover-polyfill)$/ }, (args) => ({
      path: args.path,
      namespace: 'empty-polyfill'
    }));
    pluginBuild.onLoad({ filter: /.*/, namespace: 'empty-polyfill' }, () => ({
      contents: 'export default {};',
      loader: 'js'
    }));
  }
};

const result = await build({
  entryPoints: [path.join(rootDir, 'src', 'main.js')],
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2022'],
  write: false,
  plugins: [portablePolyfillStripper]
});

const bundleJs = result.outputFiles[0].text;

// Include inline fallback for invoker commands (toggle-popover, show-modal, close) on older mobile browsers
const classicInvokerFallback = `
if (!('commandForElement' in HTMLButtonElement.prototype)) {
  document.addEventListener('click', function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest('button[commandfor][command]') : null;
    if (!btn) return;
    var target = document.getElementById(btn.getAttribute('commandfor'));
    if (!target) return;
    var cmd = btn.getAttribute('command');
    if (cmd === 'show-modal' && target.showModal) target.showModal();
    else if (cmd === 'close' && target.close) target.close();
    else if (cmd === 'toggle-popover') {
      if (target.togglePopover) target.togglePopover();
      else target.classList.toggle(':popover-open');
    }
  });
}
`;

function buildSingleHtml(versionId, title) {
  let html = htmlRaw.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    '<link rel="stylesheet" href="/src/styles/main.css" />',
    `<style>\n${cssRaw}\n</style>`
  );
  html = html.replace(
    '<script type="module" src="/src/main.js"></script>',
    `<script>\nwindow.__INITIAL_VERSION__ = '${versionId}';\nwindow.__IS_PORTABLE__ = true;\n${classicInvokerFallback}\n</script>\n<script>\n${bundleJs}\n</script>`
  );
  return html;
}

const v1Path = path.join(outDir, 'planta-3d-v1-original.html');
const v2Path = path.join(outDir, 'planta-3d-v2-edicula-gamer.html');
const v3Path = path.join(outDir, 'planta-3d-v3-primeira-fiada.html');

await Promise.all([
  fs.writeFile(v1Path, buildSingleHtml('v1', 'Planta 3D V1 (Quintal Livre 5x30 m)'), 'utf8'),
  fs.writeFile(v2Path, buildSingleHtml('v2', 'Planta 3D V2 (Lazer + Edicula Gamer 5x30 m)'), 'utf8'),
  fs.writeFile(v3Path, buildSingleHtml('v3', 'Planta 3D V3 (Modulacao 1a Fiada - Base V1)'), 'utf8')
]);

console.log('Gerados arquivos portateis:');
console.log(' -', v1Path);
console.log(' -', v2Path);
console.log(' -', v3Path);
