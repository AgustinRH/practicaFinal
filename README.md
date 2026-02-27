# Práctica final: Despliegue en Vercel, Render y Railway con CI/CD

Proyecto full-stack dividido en:

- `backend`: API Flask (Python) con `requirements.txt` y `Dockerfile`.
- `frontend`: web estática con Tailwind CSS (CDN) lista para Vercel.

## 1) Estructura

```bash
practicaFinal/
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── tests/
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── vercel.json
├── .github/workflows/
│   ├── ci.yml
│   └── deploy.yml
├── render.yaml
└── railway.toml
```

## 2) Backend local

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

API disponible en `http://localhost:5000`.

## 3) Frontend local

Abre `frontend/index.html` en navegador o usa un servidor estático.

Antes de desplegar, edita `frontend/script.js` y reemplaza:

- `https://TU-SERVICIO-RENDER.onrender.com`

por la URL real de tu backend (Render o Railway).

## 4) Despliegue en Render (backend)

1. Conecta tu repo en Render.
2. Crea un servicio web usando `Docker`.
3. Usa `rootDir = backend` (o selecciona carpeta `backend`).
4. Render detectará el `backend/Dockerfile`.
5. Al desplegar, prueba:
   - `/api/health`
   - `/api/message`

También puedes usar la base de `render.yaml` del proyecto.

## 5) Despliegue en Railway (backend)

1. Crea nuevo proyecto en Railway desde GitHub.
2. Railway usa `railway.toml` para construir con `backend/Dockerfile`.
3. Publica el servicio y copia la URL pública.
4. Verifica:
   - `/api/health`
   - `/api/message`

## 6) Despliegue en Vercel (frontend)

1. Importa el repositorio en Vercel.
2. Configura **Root Directory**: `frontend`.
3. Framework preset: `Other`.
4. Deploy.

## 7) CI/CD con GitHub Actions

### CI (`.github/workflows/ci.yml`)

- Ejecuta tests de backend con `pytest`.
- Verifica archivos clave del frontend.

### CD (`.github/workflows/deploy.yml`)

En cada push a `main`, dispara hooks de despliegue si existen los secretos:

- `RENDER_DEPLOY_HOOK_URL`
- `VERCEL_DEPLOY_HOOK_URL`
- `RAILWAY_DEPLOY_HOOK_URL`

Crea estos secretos en tu repositorio de GitHub:

- **Settings > Secrets and variables > Actions > New repository secret**

## 8) Evidencia sugerida para la entrega

- Captura de los 3 despliegues (Vercel, Render, Railway).
- Captura del workflow de CI pasando en GitHub Actions.
- Enlace a endpoints `/api/health` y `/api/message`.
- URL pública del frontend en Vercel consumiendo el backend.
