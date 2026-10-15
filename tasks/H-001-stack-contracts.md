# H-001: Aprobar base técnica y contratos del harness

Estado: APROBADA
Responsable: grajales531 + IA arquitecta
Aprobación: autorización explícita de grajales531 en la conversación del 12 de octubre de 2026.
Repositorio: grajales531/SPALS-CORP
Rama: task/H-001-stack-contracts
SHA base completo: 65453e94d6c9b318dd1a852103b669aa5f92836a
Dependencias integradas: ninguna

## Objetivo

Dejar por escrito la base técnica que permite iniciar H-002 y definir el contrato mínimo de una tarea que H-003 deberá validar.

## Rutas permitidas

- tasks/H-001-stack-contracts.md
- docs/DECISIONES-H-001.md
- docs/entregas/H-001.md

## Fuera de alcance

No crear aplicación web, API, base de datos, migraciones, CI funcional ni validador ejecutable. No modificar main ni integrar PRs.

## Aceptación y verificación

- Las decisiones deben permitir a H-002 crear el workspace, la CLI mínima y CI.
- El contrato de tarea debe incluir los campos obligatorios definidos en AGENTS.md y templates/TAREA.md.
- Toda decisión pendiente debe quedar marcada para una tarea posterior.
- Revisar el diff completo y ejecutar git diff --check.

## Entrega y bloqueos

La entrega registra las decisiones aprobadas y las que quedan diferidas. El PR se dirige a docs/harness-bootstrap y no se integra sin autorización del owner.
