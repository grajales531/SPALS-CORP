# Incorporación desde un checkout limpio

Esta guía prepara la incorporación al repositorio `grajales531/SPALS-CORP`. No autoriza implementar tareas ni sustituye un encargo aprobado por `grajales531`. H-005-PREP prepara documentación; la ejecución del workspace se verificará en un segundo encargo después de H-002.

## Requisitos mínimos

- Git y acceso de lectura al repositorio. Publicar una rama requiere escritura con la cuenta del responsable, sin usar credenciales del owner.
- Node.js 24 y npm 11, con parches compatibles por fijar en H-002.
- Un directorio nuevo y un encargo aprobado completo. Los ejemplos usan PowerShell; ejecutar cada paso solo si el anterior termina correctamente.

```powershell
git --version
node --version
npm --version
```

En Windows, si PowerShell impide ejecutar `npm.ps1`, comprobar `npm.cmd --version` sin cambiar la política de ejecución. Aquí no se instala software ni se modifica configuración.

## 1. Leer el encargo y clonar

Comprobar ID, responsable, aprobación, repositorio, rama, SHA base completo, archivos permitidos, contratos, dependencias, aceptación y comandos. Una plantilla incompleta, un plan o una tarea cerrada no autorizan trabajo.

Los valores siguientes corresponden exclusivamente a H-005-PREP. Para otro encargo, usar sus valores aprobados; no reutilizar esta autorización.

```powershell
$ramaBase = 'docs/harness-bootstrap'
$ramaTarea = 'task/H-005-onboarding-draft'
$shaBase = '65453e94d6c9b318dd1a852103b669aa5f92836a'
git clone --branch $ramaBase https://github.com/grajales531/SPALS-CORP.git SPALS-CORP
cd SPALS-CORP
git switch $ramaBase
```

Si ya existe `SPALS-CORP`, usar otro directorio vacío; no borrar ni resetear un checkout ajeno.

## 2. Verificar la base antes de crear la rama

```powershell
git remote -v
git branch --show-current
git rev-parse HEAD
git rev-parse "origin/$ramaBase"
git status --porcelain=v1
git ls-remote --heads origin "refs/heads/$ramaTarea"
```

Esperado: `origin` identifica `grajales531/SPALS-CORP`, la rama es la base aprobada, los dos SHA coinciden exactamente con `$shaBase` y el estado no imprime cambios. La última consulta debe finalizar con código 0: sin salida significa que la rama de tarea aún no está publicada. Si el remoto, SHA o estado difieren, detenerse; no adaptar la base para continuar.

## 3. Leer reglas, tarea y contratos

Leer [AGENTS.md](../AGENTS.md), [gobernanza](GOBERNANZA.md), [plan de arranque](PLAN_DE_ARRANQUE.md), [ADR propuesto](ADR-001-STACK-PROPUESTO.md), [TAREA](../templates/TAREA.md) y [PROMPTS](../templates/PROMPTS.md). Leer también el encargo aprobado y todas las rutas y versiones de contratos que indique. Si llega por un prompt transmitido por el responsable, conservar su resumen y referencia de autorización en la entrega; no inventar un archivo de tarea inexistente.

El PR #1 y el stack siguen propuestos en esta base. H-005-PREP autoriza únicamente `docs/INCORPORACION.md` y `docs/entregas/H-005-PREP.md`; sus contratos son las reglas y plantillas documentales de esta base, sin contratos de software nuevos.

## 4. Crear o cambiar a la rama asignada

Solo si la rama local y remota todavía no existen y el encargo permite crearla:

```powershell
git switch -c $ramaTarea $shaBase
git branch --show-current
git rev-parse HEAD
git status --porcelain=v1
```

Esperado antes de editar: rama igual a `$ramaTarea`, distinta de `main`, HEAD igual a `$shaBase` y estado sin salida. Si la rama de tarea ya está publicada, no recrearla: usar `git switch --track "origin/$ramaTarea"` solo cuando no exista localmente, o `git switch $ramaTarea` si ya existe. Revisar su HEAD, diff y cambios existentes con el owner antes de continuar; no exigir que un HEAD con trabajo previo sea idéntico a la base ni sobrescribirlo.

## 5. Entrega y PR cuando estén autorizados

Editar únicamente los archivos permitidos. Preparar `docs/entregas/<ID>.md` con [ENTREGA](../templates/ENTREGA.md): resultado, rutas, rama, SHA base y probado, entorno, comandos exactos, códigos de salida, reproducción y pendientes. Separar comprobaciones ejecutadas de instrucciones aún no reproducidas.

Antes del commit, revisar el diff completo y ejecutar `git diff --check`. Los archivos nuevos no aparecen en el diff ordinario hasta añadirlos: revisar su contenido y añadir al índice únicamente las rutas autorizadas; después ejecutar `git diff --cached --check` y `git diff --cached`. Tras el commit, comprobar `git diff --check $shaBase HEAD`, `git diff --name-only $shaBase HEAD`, `git rev-parse HEAD` y `git status --porcelain=v1`. Comparar la lista de archivos con el encargo, sin corregir fallos mediante cambios fuera de alcance.

Si el encargo autoriza publicar, subir únicamente la rama de tarea, sin force-push, y abrir el PR desde GitHub con el destino indicado. Para H-005-PREP: destino `docs/harness-bootstrap`, título `H-005-PREP: guía de incorporación reproducible`. Usar la plantilla de PR, enlazar la entrega y registrar el SHA final y resultados reales. Si cambia HEAD, repetir las comprobaciones afectadas. No integrar ni desplegar; esperar revisión y siguiente asignación.

## Pendiente de H-002

No hay workspace, lockfile, CLI ejecutable ni CI en esta base. Quedan pendientes la instalación de dependencias, los comandos del workspace, las comprobaciones funcionales y la CLI. No se prescriben comandos para esos pasos hasta que H-002 los defina e integre. El segundo encargo ejecutará la guía desde un checkout limpio y registrará inconsistencias reales.

## Bloqueos frecuentes

| Bloqueo | Acción |
| --- | --- |
| Acceso insuficiente o fallo de red, TLS o autenticación | Registrar comando, error y código de salida; solicitar revisión de acceso al owner. No compartir credenciales ni desactivar validación TLS. |
| SHA distinto del aprobado | Detener edición y pedir un encargo actualizado; no elegir otra base ni resetear trabajo. |
| Cambios ajenos o rama ya ocupada | Conservarlos, registrar el estado y coordinar un checkout aislado o la continuación autorizada. |
| Tarea incompleta o dependencia pendiente | Pedir los datos o decisión faltantes; continuar únicamente trabajo independiente ya autorizado. |

## Estado de comprobación

H-005-PREP comprobó versiones locales, clonación de la base, remoto, rama, SHA, estado limpio, estructura documental y creación de la rama asignada. El clon ejecutado usó `--single-branch`; la variante general del paso 1 y la continuación de una rama remota existente no se ejecutaron. La evidencia exacta y las limitaciones están en [la entrega](entregas/H-005-PREP.md). No se ejecutaron instalación, compilación, pruebas funcionales ni CLI.
