import http from 'node:http';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const pdfOut = path.join(rootDir, 'versoes', 'planta-blocos-v1.pdf');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

function findBrowser() {
  const candidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  ];
  return candidates.find((p) => existsSync(p)) || null;
}

const browserPath = findBrowser();
if (!browserPath) {
  throw new Error('Microsoft Edge ou Chrome não encontrado para gerar o PDF.');
}

await fs.mkdir(path.dirname(pdfOut), { recursive: true });

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0];
  const relPath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const fullPath = path.join(distDir, relPath);
  try {
    const data = await fs.readFile(fullPath);
    const ext = path.extname(fullPath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
const { port } = server.address();
const targetUrl = `http://127.0.0.1:${port}/planta-impressao.html`;

try {
  await execFileAsync(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfOut}`,
    targetUrl
  ]);
  const stat = await fs.stat(pdfOut);
  if (stat.size < 10000) {
    throw new Error(`PDF gerado muito pequeno (${stat.size} bytes).`);
  }
  console.log(`PDF exportado com sucesso: ${pdfOut} (${stat.size} bytes)`);
} finally {
  server.close();
}
