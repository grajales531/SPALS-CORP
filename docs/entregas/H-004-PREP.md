# Entrega H-004-PREP

Responsable: grajales531 + IA arquitecta
Rama: task/H-004-PREP-validator-spec
SHA base: b13af577eba36b66ab53cf725bf213ccc7da76fd
SHA probado: HEAD del PR (solo documentación)
PR: hacia docs/harness-bootstrap (enlace en el PR)
Estado: en revisión

## Resultado y archivos

- `docs/specs/H-004-PRUEBAS-VALIDADOR.md`: la interfaz propuesta de `harness validate`, el formato de tarea, 14 casos (3 válidos, 9 de rechazo, 2 de uso) con su salida y código de error, y las reglas para H-004.
- `tasks/H-004-PREP-validator-spec.md`: el encargo.

Cubre los cinco rechazos de H-001 (R1, R2, R3, R5 y R6) y añade cuatro más: SHA mal formado, campo ausente, placeholder y errores múltiples.

## Evidencia

| Comprobación | Comando/pasos | Entorno | Resultado/código de salida | SHA/evidencia |
| --- | --- | --- | --- | --- |
| Alcance | `git diff --name-only b13af577 HEAD` | macOS, Git | Solo las 3 rutas permitidas | HEAD del PR |
| Espacios | `git diff --check b13af577 HEAD` | macOS, Git | 0 | HEAD del PR |
| Cobertura de H-001 | Lectura frente a DECISIONES-H-001.md | Revisión manual | Los 5 rechazos exigidos tienen caso | HEAD del PR |

## Reproducción y límites

Es solo documentación: no hay software que ejecutar. La interfaz `validate` es una propuesta y H-003 puede ajustarla actualizando primero este documento.

## Decisiones

Ninguna de arquitectura. Los códigos de error quedan fijados para H-003 y H-004.
