# Proyecto de Recargas de Celulares

Este proyecto es una aplicación Angular que sirve como interfaz para gestionar recargas de celulares por vendedor y operador móvil.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js (versión 18 o superior recomendada)
- Angular CLI (versión 19.0.2 o superior)

**Para instalar Angular CLI globalmente, ejecuta:**

```bash
npm install -g @angular/cli
```

## Clonar el repositorio

Para obtener el código fuente del proyecto, clona el repositorio desde GitHub:

```bash
git clone https://github.com/a52290451/front_recarga.git
```

Luego, accede al directorio del proyecto:

```bash
cd front_recarga
```

Instala las dependencias necesarias con:

```bash
npm install
```

## Servidor de desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.


## Generar componentes o módulos adicionales

Puedes utilizar Angular CLI para generar nuevos componentes, servicios, directivas, etc. Por ejemplo, para generar un nuevo componente:

```bash
ng generate component nombre-del-componente
```

Para ver todos los esquemas disponibles:

```bash
ng generate --help
```

## Construcción del proyecto

Para compilar el proyecto y preparar los artefactos para producción, ejecuta:

```bash
ng build
```

Los archivos resultantes estarán en la carpeta `dist/`. Esta versión está optimizada para rendimiento.

## Ejecución de pruebas unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io), utiliza el siguiente comando:

```bash
ng test
```

Las pruebas se ejecutarán en un navegador configurado y mostrarán los resultados en tiempo real.

## Pruebas de extremo a extremo (e2e)

Si el proyecto incluye pruebas de extremo a extremo, puedes ejecutarlas con:

```bash
ng e2e
```

**Nota:** Asegúrate de tener configurado un framework de pruebas e2e, como Protractor o Cypress.

## Recursos adicionales

Si necesitas más información sobre Angular CLI, consulta la [Documentación Oficial de Angular CLI](https://angular.dev/tools/cli) .

**NOTA:** El Backend de la aplicación se encuentra en: https://github.com/a52290451/recargasc.git
