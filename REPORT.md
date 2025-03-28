# Informe de Ejecución del Pipeline

## Resumen

Este informe describe los pasos realizados para configurar y ejecutar el pipeline de CI/CD para el proyecto Task API.

## Pasos

1. **Gestión del Repositorio Git**  
     
   - Se inicializó un repositorio local y se conectó a GitHub.
   - Se hizo commit de una versión inicial de los archivos

   

2. **Integración con Docker**  
     
   - Se creó un Dockerfile para contenerizar la aplicación
   - Se construye el contenedor de docker y se ejecuta (ver imagen en archivo documents/ReportPipeline.pdf)

   

3. **Configuración de Jenkins**  
     
   - Se configuró Jenkins para automatizar el proceso de construcción, prueba y despliegue.
   - Se usó opción "Pipeline script from SCM"
   - Se usó nombre del Branch: main
   - Y para Script path: Dockerfile 


## Problemas Encontrados

- \[Sección opcional para problemas\]

## Resultados

- \[Agregar capturas de pantalla o registros de ejecuciones exitosas del pipeline\]

