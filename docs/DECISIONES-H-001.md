# Decisiones H-001: base técnica y contrato de tareas

Estado: APROBADO por grajales531 el 12 de octubre de 2026.

## Base técnica

- Runtime: Node.js 24.x.
- Gestor: npm 11.x con npm workspaces y package-lock.json versionado.
- Lenguaje: TypeScript en modo estricto.
- Web futura: React con Vite.
- API futura: Fastify.
- Persistencia futura: PostgreSQL mediante contenedor reproducible cuando el entorno lo permita.
- CI inicial: GitHub Actions sobre Linux con Node.js 24.x.
- Soporte inicial: Windows, macOS y Linux para comandos de Node y npm. Las pruebas con PostgreSQL se añadirán cuando exista API.

H-002 fija las versiones exactas de las dependencias de desarrollo en el lockfile. H-002 no crea todavía web, API, PostgreSQL ni Docker.

## Contrato mínimo de una tarea

Una tarea aprobada debe incluir:

1. ID y título.
2. Estado.
3. Responsable.
4. Aprobación verificable.
5. Repositorio, rama y SHA base completo.
6. Dependencias integradas.
7. Objetivo observable.
8. Contratos e invariantes aplicables.
9. Rutas permitidas.
10. Fuera de alcance.
11. Criterios de aceptación y comprobaciones exactas.
12. Entrega, evidencia y condiciones de bloqueo.

El validador de H-003 deberá rechazar tareas sin aprobación, con estado cerrado, SHA base incorrecto, dependencias no integradas o cambios fuera de las rutas permitidas.

## Decisiones diferidas

- Librería de persistencia y migraciones: se define antes de F-002.
- Esquemas y validación de contratos HTTP: se define en F-001.
- Herramientas de lint, formato, cobertura y pruebas de integración: se proponen después de validar el harness mínimo.
- Protección definitiva de main: el owner la configura y verifica antes de integrar código de aplicación.
