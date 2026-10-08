# Gobernanza

| Persona | GitHub | Responsabilidad |
| --- | --- | --- |
| Owner | grajales531 | Arquitectura, prioridades, tareas y autorización final de integración |
| Adrián | adriancouoh672-oss | Responsable técnico; coordina dependencias y propone mejoras |
| Bruno | bruneto-creator | Implementador A; ejecuta tareas asignadas |
| Brandom | hola0202bhola-bit | Implementador B; ejecuta tareas asignadas |

La IA arquitecta coordina y revisa por autorización del owner. Una propuesta no autoriza implementarla. Los roles describen responsabilidades; todos pueden informar fallas y bloqueos.

## Flujo

Borrador → Aprobada → En curso → En revisión → Integrada → Cerrada.
Una tarea bloqueada registra la causa y el estado de retorno. Un solo responsable activo por tarea y una rama por tarea. Primero se integran contratos compartidos, después sus consumidores.

La dirección aprueba el encargo; cada integrante usa su IA en un checkout aislado. El agente entrega código, evidencia y PR. La IA arquitecta revisa; la dirección autoriza integrar.

## Coordinación

Cada sesión termina con entrega actualizada y próximo paso. La revisión diaria se activa por la dirección: PR/HEAD, alcance, pruebas, bloqueos y siguiente tarea. No hay automatización configurada.

Reunión semanal: lunes o sábado, horario pendiente. Agenda: demo, bloqueos, decisiones y nuevas tareas. Registrar acuerdos breves y responsables. Las decisiones compartidas se conservan en ADRs.

## Acceso

El owner informó que envió las invitaciones a los tres compañeros. La consulta posterior devuelve read para los tres; esto no confirma aceptación. No hay rulesets configurados según la API. La protección clásica no se ha verificado. No liberar trabajo de escritura compartida hasta comprobar la política efectiva de main.

La escritura del conector ya se verificó creando el README inicial. La configuración de permisos y protecciones administrativas sigue pendiente.
