# Plan de arranque

## Objetivo

Comprobar el ciclo tarea → IA → cambios → pruebas → PR → revisión antes de construir el piloto web de frutería. Trabajar por hitos, sin fechas prometidas antes de conocer disponibilidad.

## Hito 0 — Base de colaboración

Owner e IA arquitecta: publicar y revisar las reglas, verificar aceptación de invitaciones, configurar y probar protección de main. Confirmar herramientas de IA y disponibilidad de cada integrante.

Salida: reglas integradas, permisos comprobados y SHA base identificado. Este PR propone documentación; no libera tareas de código automáticamente.

## Hito 1 — Harness

| ID | Responsable | Entrega | Dependencia |
| --- | --- | --- | --- |
| H-001 | Owner + IA arquitecta | Aprobar stack, contratos, política y esquema de tareas | Hito 0 |
| H-002 | Adrián | Workspace, CLI mínima, comandos y CI | H-001 |
| H-003 | Owner + IA arquitecta | Validador de tarea, base, rutas y reporte | H-002 |
| H-004 | Bruno | Fixtures y pruebas de rechazo del validador | H-003 |
| H-005 | Brandom | Incorporación reproducida desde checkout limpio | H-002 |
| H-006 | Adrián + owner | Ciclo completo de tarea y PR verificado | H-003, H-004, H-005 |

H-005 puede avanzar en paralelo con H-003/H-004. Bruno trabaja en fixtures y pruebas sin modificar el validador para hacerlas pasar. Brandom documenta la incorporación y registra inconsistencias sin modificar configuración.

Aceptación: aceptar una tarea válida; rechazar tarea sin aprobar, cerrada, base incorrecta, dependencia pendiente y diff fuera de alcance. Conservar códigos de salida y evidencia por SHA; invalidar resultados cuando cambie HEAD. Las comprobaciones de alcance no sustituyen permisos.

## Hito 2 — Frutería

| ID | Responsable | Entrega | Dependencia |
| --- | --- | --- | --- |
| F-001 | Owner + IA arquitecta | Contratos de catálogo, carrito, pedido y errores | H-006 |
| F-002 | Adrián | API y persistencia, total en servidor y reintentos | F-001 |
| F-003 | Owner + IA arquitecta | Base web y componentes compartidos mínimos | F-001 |
| F-004 | Bruno | Catálogo y estados carga/vacío/error | F-002, F-003 |
| F-005 | Brandom | Carrito y pruebas de cantidades | F-001, F-003 |
| F-006 | Adrián + owner | Confirmación, administración protegida y flujo completo | F-002, F-004, F-005 |

Primer alcance propuesto: productos por pieza/paquete, cantidades enteras e importes en centavos. Confirmar estas reglas antes de congelar contratos. Pedido persistido después de recargar, total validado por servidor, reintentos sin duplicados y errores visibles. Consulta administrativa protegida antes de exponer pedidos. Sin pagos reales ni datos de clientes reales; no autoriza despliegue externo.

## Asignación

Cada entrada está PLANIFICADA. La IA arquitecta prepara un encargo aprobado con SHA real, rutas exactas, contratos y comandos comprobados. No enviar placeholders como órdenes de implementación.

H-002 limita cambios a archivos de configuración enumerados, CLI inicial y CI. H-004 limita cambios a tools/harness/tests/ y su entrega. H-005 limita cambios a docs/INCORPORACION.md y su entrega. Los encargos definitivos precisarán archivos, comandos y base.

## Cierre del piloto

Aceptar únicamente después de pruebas funcionales del recorrido completo, casos negativos del harness, entregas reproducibles y aprobación de dirección. Instalar dependencias o compilar no demuestra funcionamiento.
