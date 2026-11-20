@echo off
cd /d "%~dp0"
echo Iniciando Passeio 3D da Planta (PC e Celular)...
start "" "http://127.0.0.1:4173"
npx vite preview --host 0.0.0.0 --port 4173
