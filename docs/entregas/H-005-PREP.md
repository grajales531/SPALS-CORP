# Entrega H-005-PREP

Responsable: hola0202bhola-bit (Brandon)

Rama: task/H-005-onboarding-draft

SHA base: 65453e94d6c9b318dd1a852103b669aa5f92836a

SHA probado de la guía publicada: 87e00e35d01ae6acc78a19f26a21680301bc3f92

PR: https://github.com/grajales531/SPALS-CORP/pull/3 (destino: docs/harness-bootstrap)

Estado: en revisión documental; integración pendiente de autorización de dirección

## Resultado y archivos

Se preparó una guía breve para clonar, verificar la base y trabajar en la rama autorizada. Diferencia lo comprobado de los pasos todavía no reproducidos, enumera bloqueos y reserva instalación, comandos del workspace, comprobaciones funcionales y CLI para H-002. No se instalaron dependencias ni se ejecutaron compilaciones o pruebas funcionales.

Archivos autorizados y únicos cambios de contenido:

- `docs/INCORPORACION.md`: requisitos, secuencia de incorporación, entrega/PR y pendientes.
- `docs/entregas/H-005-PREP.md`: este reporte, usando `templates/ENTREGA.md`.

Autorización: prompt de tarea aprobada H-005-PREP transmitido por Brandon en este chat el 2026-10-13, que declara autorización de `grajales531`. Fija responsable, repositorio, rama, SHA base, dos archivos permitidos y PR hacia `docs/harness-bootstrap` con título `H-005-PREP: guía de incorporación reproducible`. Aceptación: los ocho contenidos pedidos, inspección de la estructura documental y `git diff --check`. El encargo es preparación documental; no libera H-005 ni implementación del harness. No existe un archivo versionado de esta tarea en la base consultada; no se creó uno fuera del alcance.

Contratos aplicados: `AGENTS.md`, `docs/GOBERNANZA.md`, `docs/PLAN_DE_ARRANQUE.md`, `docs/ADR-001-STACK-PROPUESTO.md` y `templates/{TAREA,ENTREGA,PROMPTS}.md` del SHA base. Dependencias: no se requiere integrar H-002 para este borrador autorizado; la ejecución del workspace queda pendiente de H-002 y de un segundo encargo aprobado. No se aprobó ningún contrato de software nuevo.

## Evidencia

Entorno: Windows, PowerShell; Git 2.55.0.windows.5, Node.js v24.21.0, npm 11.19.0. Checkout aislado de esta sesión: `work/SPALS-CORP`. Se usó Git con TLS de Windows fuera del sandbox para las consultas remotas y la clonación; no se cambió configuración de Git ni se desactivó TLS. `credential.helper=` se aplicó solo a las lecturas para no usar credenciales en el clon público.

| Comprobación | Comando/pasos | Entorno | Resultado/código de salida | SHA/evidencia |
| --- | --- | --- | --- | --- |
| Requisitos | `git --version`; `node --version`; `npm.cmd --version` | Windows/PowerShell | Pasa: versiones indicadas; 0 en cada comando | Sesión de H-005-PREP |
| Rama remota y ausencia de la rama nueva | `git -c credential.helper= ls-remote --heads https://github.com/grajales531/SPALS-CORP.git refs/heads/docs/harness-bootstrap refs/heads/task/H-005-onboarding-draft` | Fuera del sandbox, TLS de Windows; `GIT_TERMINAL_PROMPT=0` | Pasa, 0; solo devolvió la rama base y su SHA aprobado | SHA base completo |
| Checkout limpio | `git -c credential.helper= clone --single-branch --branch docs/harness-bootstrap https://github.com/grajales531/SPALS-CORP.git work/SPALS-CORP` | Desde el directorio de la sesión, destino nuevo; fuera del sandbox | Pasa, 0 | SHA base completo |
| Remoto y base local | `git remote -v`; `git branch --show-current`; `git rev-parse HEAD`; `git rev-parse origin/docs/harness-bootstrap`; `git status --porcelain=v1` | Dentro del checkout | Pasa; origin correcto, rama base, SHA coincidentes y estado sin salida | SHA base completo |
| Estructura y lectura | `rg --files --hidden -g '!.git'`; `Get-Content -Raw AGENTS.md, docs/GOBERNANZA.md, docs/PLAN_DE_ARRANQUE.md, docs/ADR-001-STACK-PROPUESTO.md, templates/TAREA.md, templates/ENTREGA.md, templates/PROMPTS.md, .github/PULL_REQUEST_TEMPLATE.md`; `Get-ChildItem -Path docs, templates -Recurse -Filter AGENTS.md` | Windows/PowerShell, base aprobada | Pasa, invocación 0; diez archivos documentales, sin AGENTS adicionales bajo docs/templates | SHA base completo; nombre real de plantilla: `.github/pull_request_template.md` |
| Rama de tarea | `git switch -c task/H-005-onboarding-draft 65453e94d6c9b318dd1a852103b669aa5f92836a`; rama, HEAD y estado revisados después | Checkout aislado | Pasa, 0; rama asignada, distinta de main, base exacta y estado limpio | SHA base completo |
| Guía: espacios y revisión | `git add -- docs/INCORPORACION.md`; `git diff --check`; `git diff --cached --check`; `git diff --cached -- docs/INCORPORACION.md` | Rama de tarea | Pasa, 0 en ambas comprobaciones; diff completo leído | Guía que dio lugar a b7515c508970b3c5da904e81201c573a11b3c293 |
| Guía comprometida | `git diff --check 65453e94d6c9b318dd1a852103b669aa5f92836a HEAD`; `git status --porcelain=v1` | Tras commit de la guía | Pasa, 0; sin errores y estado limpio | b7515c508970b3c5da904e81201c573a11b3c293 |
| Guía publicada | `git -c credential.helper= fetch origin refs/heads/task/H-005-onboarding-draft:refs/remotes/origin/task/H-005-onboarding-draft`; `git diff --check 65453e94d6c9b318dd1a852103b669aa5f92836a origin/task/H-005-onboarding-draft`; `git diff --exit-code HEAD origin/task/H-005-onboarding-draft -- docs/INCORPORACION.md` | Lectura remota fuera del sandbox; contenido verificado localmente | Pasa, 0 en comprobación de espacios y comparación; guía remota idéntica a la local | 87e00e35d01ae6acc78a19f26a21680301bc3f92 |
| Instalación, build, pruebas y CLI | No ejecutados; comandos pendientes de H-002 | No aplica | No ejecutada | Sin evidencia funcional |

Este reporte se añade después del SHA probado de la guía publicada; ese SHA no incluye el reporte. Los commits b7515c508970b3c5da904e81201c573a11b3c293 y 1345a979b50ca4ab65b4f83c5cbb87a2a8113a4e documentan preparación local y no se publicaron. GitHub creó commits distintos al cargar los archivos desde el navegador. El SHA final y la comprobación del diff de los dos documentos se registran en la descripción del PR; se debe comprobar su HEAD actual antes de integrar. Ninguna evidencia anterior valida automáticamente commits posteriores.

## Reproducción y límites

Para inspeccionar esta entrega sin editar: clonar el repositorio en otro directorio vacío, cambiar a `task/H-005-onboarding-draft`, obtener `git rev-parse HEAD`, leer ambos documentos y ejecutar `git diff --check 65453e94d6c9b318dd1a852103b669aa5f92836a HEAD` y `git diff --name-only 65453e94d6c9b318dd1a852103b669aa5f92836a HEAD`. Deben aparecer únicamente los dos archivos autorizados. Comparar el HEAD con el registrado en el PR y comprobar `git status --porcelain=v1` sin salida.

La preparación usó `clone --single-branch`, no la variante general de clonación de la guía. No se ejecutaron el cambio a una rama remota de tarea ya existente, la incorporación en un segundo equipo ni el flujo del workspace. La lectura del encargo fue manual desde el prompt aprobado. Estos límites no se presentan como pruebas completas de H-005.

Bloqueos iniciales observados y resueltos sin modificar configuración:

- Dentro del sandbox, la consulta con `git -c credential.helper= -c http.sslBackend=openssl ls-remote --heads https://github.com/grajales531/SPALS-CORP.git refs/heads/docs/harness-bootstrap refs/heads/task/H-005-onboarding-draft` falló por `Could not resolve host: github.com`; código Git capturado: 128.
- Fuera del sandbox, esa variante OpenSSL falló por `unable to get local issuer certificate (20)`; código de salida de la herramienta: 1. No se desactivó la validación de certificados.
- La misma consulta usando el backend habitual de Windows, sin `http.sslBackend=openssl`, pasó con código 0 fuera del sandbox. La clonación también pasó. No se alteraron scripts, configuración ni contratos para esconder fallos.
- El conector GitHub dejó de estar disponible durante esta sesión; no se atribuye a él ninguna comprobación o publicación.
- `git -c credential.interactive=never push --set-upstream origin task/H-005-onboarding-draft`, con `GIT_TERMINAL_PROMPT=0` y `GCM_INTERACTIVE=Never`, falló: `Cannot prompt because user interactivity has been disabled` y `unable to get password from user`; código de la herramienta: 1. No se cambiaron credenciales. Se creó la rama desde la base exacta y se cargaron los documentos mediante la sesión del navegador de Brandon (`hola0202bhola-bit`); el PR #3 se abrió inicialmente en borrador y se completa para revisión tras publicar y comprobar esta entrega.
- Git advirtió sobre futura conversión LF a CRLF por su configuración existente; las comprobaciones de espacios pasaron. No se cambió esa configuración.

## Decisiones

Ningún ADR nuevo aprobado. El stack del ADR-001 y las reglas del PR #1 se tratan como propuestas de esta base; el permiso para esta tarea procede del prompt explícito. No se modificaron otros archivos, dependencias, scripts, CI, permisos ni arquitectura. Integración y despliegue no autorizados.

Próximo paso: revisión del owner y espera de asignación. Después de H-002 integrado, un segundo encargo permitirá ejecutar la guía desde un checkout limpio y registrar inconsistencias reales.
