@echo off
cd /d "%~dp0"
echo ======================================================
echo  PASSEIO 3D - ACESSO PELO CELULAR (MESMO WI-FI)
echo ======================================================
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
  for /f "tokens=* delims= " %%b in ("%%a") do (
    echo  Abra no navegador do celular: http://%%b:4173
  )
)
echo.
echo  Dica: se o Windows Firewall bloquear, voce tambem pode
echo  enviar os arquivos da pasta "versoes\" direto no WhatsApp.
echo ======================================================
npx vite preview --host 0.0.0.0 --port 4173
