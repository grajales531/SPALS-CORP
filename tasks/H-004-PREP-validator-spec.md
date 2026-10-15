# Tarea H-004-PREP: especificación de pruebas del validador

Estado: APROBADA
Responsable: grajales531 + IA arquitecta (reasignada; aviso en el issue #2, 2026-10-15)
Aprobación: autorización explícita de grajales531 en la conversación del 15 de octubre de 2026.
Repositorio: grajales531/SPALS-CORP
Rama: task/H-004-PREP-validator-spec
SHA base completo: b13af577eba36b66ab53cf725bf213ccc7da76fd
Dependencias integradas: H-001, H-002 (b13af57)

## Objetivo

Dejar escrito qué casos debe aceptar y rechazar el validador de H-003, con el resultado esperado de cada uno, para que H-003 se implemente contra esos casos y H-004 los convierta en fixtures y pruebas.

## Contexto y contratos

- Contrato de tarea: docs/DECISIONES-H-001.md (12 campos) y templates/TAREA.md.
- Códigos de salida de la CLI: docs/entregas/H-002.md (0, 1, 2).

## Rutas permitidas

- tasks/H-004-PREP-validator-spec.md
- docs/specs/H-004-PRUEBAS-VALIDADOR.md
- docs/entregas/H-004-PREP.md

## Fuera de alcance

Código, fixtures reales y cambios en la CLI: son de H-003 y H-004.

## Aceptación y verificación

- Cubre los cinco rechazos exigidos por H-001, el caso válido y los errores de formato.
- Cada caso indica la entrada, el código de salida y el código de error esperados.
- `git diff --check` y `git diff --name-only` contra la base: solo rutas permitidas.

## Entrega y bloqueos

PR hacia docs/harness-bootstrap con la entrega en docs/entregas/H-004-PREP.md.
