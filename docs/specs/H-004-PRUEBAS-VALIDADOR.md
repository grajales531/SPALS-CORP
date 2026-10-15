# Especificación de pruebas del validador (H-003 / H-004)

Este documento fija **qué** debe decidir el validador de tareas. H-003 lo implementa y H-004 convierte cada caso en un fixture con su prueba. Si H-003 necesita cambiar un caso, primero se actualiza este documento y lo aprueba dirección.

## Interfaz propuesta

```
npm run harness -- validate <ruta-tarea.md> [--base <ref>] [--head <ref>]
```

- Lee la tarea y compara con Git: el SHA base de la tarea, el diff `base...head` y las dependencias integradas en la rama destino.
- Por defecto `--head` es `HEAD` y la rama destino es `docs/harness-bootstrap`. H-003 puede ajustar estos valores si lo documenta.
- Salida: una línea por hallazgo, con el formato `ERROR <CODIGO>: <detalle>`. Al final imprime `OK` o `RECHAZADA`.
- Códigos de salida: **0** tarea válida; **1** tarea rechazada (uno o más errores); **2** uso incorrecto (sin argumentos, archivo inexistente o ilegible).

## Formato de tarea que se valida

Son las cabeceras `Clave: valor` y las secciones de `templates/TAREA.md`. Campos obligatorios: `Estado`, `Responsable`, `Aprobación`, `Repositorio`, `Rama`, `SHA base completo`, `Dependencias integradas`, y las secciones `Objetivo`, `Contexto y contratos`, `Rutas permitidas`, `Fuera de alcance`, `Aceptación y verificación`, `Entrega y bloqueos`.

- `Estado` válido para trabajar: `APROBADA` o `EN CURSO`.
- `SHA base completo`: 40 caracteres hexadecimales.
- `Rutas permitidas`: lista de rutas exactas o patrones con `**` al final de un directorio.
- `Dependencias integradas`: IDs de tarea, o `ninguna`.

## Casos

Cada fixture define tres cosas: la tarea, el escenario Git (SHA base real, archivos cambiados, tareas ya integradas) y el resultado esperado.

| # | Caso | Escenario | Salida | Error esperado |
| --- | --- | --- | --- | --- |
| V1 | Tarea válida | Todo correcto; cambios solo en rutas permitidas | 0 | — |
| V2 | Válida con patrón `**` | Cambios dentro de `tools/harness/**` | 0 | — |
| V3 | Válida sin dependencias | `Dependencias integradas: ninguna` | 0 | — |
| R1 | Sin aprobación | Falta `Aprobación` o está vacía/placeholder | 1 | `TAREA_SIN_APROBACION` |
| R2 | Estado no ejecutable | `BORRADOR`, `CERRADA` o `INTEGRADA` | 1 | `TAREA_ESTADO_INVALIDO` |
| R3 | SHA base distinto | El SHA no es ancestro de `head` | 1 | `BASE_SHA_DISTINTO` |
| R4 | SHA base mal formado | Corto o no hexadecimal | 1 | `BASE_SHA_INVALIDO` |
| R5 | Dependencia pendiente | Una dependencia no está integrada en la rama destino | 1 | `DEPENDENCIA_PENDIENTE` |
| R6 | Cambio fuera de alcance | Un archivo del diff no coincide con ninguna ruta permitida | 1 | `RUTA_FUERA_DE_ALCANCE` (uno por archivo) |
| R7 | Campo obligatorio ausente | Falta cualquier cabecera o sección | 1 | `TAREA_CAMPO_FALTANTE` (indica el campo) |
| R8 | Placeholder sin rellenar | Algún valor contiene `<...>` de la plantilla | 1 | `TAREA_PLACEHOLDER` |
| R9 | Varios errores a la vez | R1 + R6 | 1 | Ambos códigos; no se detiene en el primero |
| U1 | Sin argumentos | `harness validate` | 2 | — |
| U2 | Archivo inexistente | Ruta que no existe | 2 | — |

## Reglas para H-004

- Un fixture por caso en `tools/harness/test/fixtures/<caso>/`. Los escenarios Git se crean con un repo temporal dentro de la prueba, sin depender del historial real de SPALS-CORP.
- Cada prueba comprueba el código de salida **y** los códigos de error. Comprobar solo el texto no basta.
- Las pruebas no modifican el validador para pasar. Si un caso no se puede cumplir, se reporta como bloqueo.
- Todas las pruebas corren con `npm run check` en local y en CI.

## Fuera de esta especificación

Permisos de GitHub, protección de ramas y revisión humana: el validador **no** los sustituye. Tampoco valida contenido técnico, solo que el encargo esté bien formado y que el diff respete su alcance.
