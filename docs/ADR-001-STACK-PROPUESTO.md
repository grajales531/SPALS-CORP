# ADR-001 — Stack propuesto

Estado: PROPUESTO. Decisión final: grajales531.

Proponer TypeScript para harness, web y API; React/Vite para web; Node.js/Fastify para API; PostgreSQL para persistencia. Workspace npm con lockfile compartido. Fijar versiones compatibles y comandos en H-002, después de aprobar este ADR.

Evaluar React Native/Expo para móvil más adelante. Compartir contratos y lógica no significa reutilizar toda la interfaz.

Estructura:
- apps/web/: interfaz web.
- apps/api/: API y datos.
- packages/contracts/: contratos compartidos.
- packages/domain/: lógica independiente de interfaz cuando exista consumidor.
- tools/harness/: CLI, política, reportes y pruebas.
- tasks/: encargos versionados.
- docs/: decisiones, entregas y revisiones.
- .github/: CI y plantillas.

La propuesta reduce cambios de lenguaje y mantiene una API para ambas interfaces. Antes de aprobar: comprobar requisitos en los equipos, instalación de base de datos, compatibilidad, herramientas de IA y costes. No contratar servicios ni desplegar por este ADR.

Fuentes oficiales:
- https://vite.dev/guide/
- https://fastify.dev/docs/latest/Reference/TypeScript/
- https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/
- https://reactnative.dev/docs/typescript
- https://docs.expo.dev/guides/typescript/
