# Documentación de Scripts en el `package.json`

Este documento explica el propósito de los scripts definidos en el archivo `package.json`.

### Scripts

#### `be`

**Comando:**

```bash
pnpm --filter @fintech/backend
```

**Descripción:**
Este script se utiliza para ejecutar comandos dentro del directorio correspondiente al backend del proyecto, identificado por el filtro `@fintech/backend`. Esto permite ejecutar cualquier comando relacionado con el backend sin necesidad de moverse manualmente al directorio del backend.

**Uso Ejemplo:**
Si deseas instalar dependencias en el backend, puedes ejecutar:

```bash
pnpm be install
```

Esto instalará las dependencias solo en el directorio del backend.

---

#### `fe`

**Comando:**

```bash
pnpm --filter @fintech/frontend
```

**Descripción:**
Este script se utiliza para ejecutar comandos dentro del directorio correspondiente al frontend del proyecto, identificado por el filtro `@fintech/frontend`. Permite ejecutar cualquier comando relacionado con el frontend sin necesidad de cambiar manualmente al directorio del frontend.

**Uso Ejemplo:**
Si deseas ejecutar el servidor de desarrollo del frontend, puedes utilizar:

```bash
pnpm fe dev
```

Esto ejecutará el servidor de desarrollo solo para el frontend.

---

### Beneficio de Estos Scripts

Estos scripts simplifican la ejecución de tareas específicas en proyectos monorepo. Al usar `pnpm --filter`, puedes interactuar con subproyectos específicos sin necesidad de cambiar manualmente de directorio, lo que ahorra tiempo y reduce la posibilidad de errores al ejecutar comandos en el lugar incorrecto.
