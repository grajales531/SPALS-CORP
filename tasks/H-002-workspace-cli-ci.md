# Tarea H-002: workspace, CLI mínima y CI

Estado: APROBADA
Responsable: grajales531 + IA arquitecta (reasignada; aviso en el issue #2, 2026-10-15)
Aprobación: autorización explícita de grajales531 en la conversación del 15 de octubre de 2026.
Repositorio: grajales531/SPALS-CORP
Rama: task/H-002-workspace-cli-ci
SHA base completo: 740a4bde49746855b56521b6b5540df881120215
Dependencias integradas: H-001 (740a4bd)

## Objetivo

Que cualquier integrante, con un checkout limpio, pueda ejecutar `npm ci` y `npm run check`, y que GitHub Actions ejecute lo mismo en cada PR.

## Contexto y contratos

- Base técnica: docs/DECISIONES-H-001.md (Node 24, npm 11 con workspaces y lockfile, TypeScript estricto, GitHub Actions en Linux).
- La CLI `harness` vive en `tools/harness` y por ahora ofrece `help`, `version` y `doctor`. El validador llega en H-003.
- Códigos de salida: 0 = correcto, 1 = comprobación fallida, 2 = uso incorrecto.

## Rutas permitidas

- package.json, package-lock.json, tsconfig.base.json, .nvmrc, .gitignore
- tools/harness/** (package.json, tsconfig.json, src/, test/)
- .github/workflows/ci.yml
- tasks/H-002-workspace-cli-ci.md, docs/entregas/H-002.md

## Fuera de alcance

Web, API, PostgreSQL, Docker, lint/formato, validador de tareas (H-003) y cambios de protección de ramas.

## Aceptación y verificación

1. `npm ci` termina con 0 en un checkout limpio.
2. `npm run check` (typecheck, build y pruebas) termina con 0.
3. `npm run harness -- doctor` informa Node y npm y devuelve 0 con Node 24 y npm 11.
4. Un comando desconocido devuelve 2.
5. El workflow `CI` pasa en el PR.
6. `git diff --check` y `git diff --name-only` contra la base: solo rutas permitidas.

## Entrega y bloqueos

PR hacia docs/harness-bootstrap con la evidencia en docs/entregas/H-002.md. Si CI falla por causas ajenas al alcance, registrar el bloqueo en lugar de ampliar el alcance.
