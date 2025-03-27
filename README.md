# Proyecto API de Tareas

Este proyecto demuestra una API simple de Node.js para la gestión de tareas, integrada con Docker para la contenedorización y Jenkins para el pipeline de CI/CD.

## Características

- Listar todas las Tasks  
- Obtener Task por ID

## Ejecutar Localmente

1. Instalar dependencias: `npm install`  
2. Iniciar el servidor: `npm start`

## Ejecutar con Docker

1. Construir la imagen: `docker build -t desafio-pipeline .`  
2. Ejecutar el contenedor: `docker run -p 3000:3000 desafio-pipeline`

