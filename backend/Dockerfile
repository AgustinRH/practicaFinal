# Usamos una imagen ligera de Python
FROM python:3.9-slim

# Directorio de trabajo
WORKDIR /app

# Copiamos los requisitos e instalamos
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código
COPY . .

# Comando para ejecutar con Gunicorn (mejor para producción)
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "main:app"]