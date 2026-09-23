# Apartment Expenses Manager

## ¿Qué es?
Esta aplicación permite gestionar los gastos de un apartamento, facilitando el seguimiento y la organización de los mismos.

## ¿Cómo se instala?
```bash
npm install
```
## ¿Cómo se ejecuta?
```bash
npm run dev
```
## ¿Cómo se testea?
```bash
npm run test:run
```
## ¿Cómo se valida?
```bash
npm run lint
npm run test:run
```
## ¿Cómo se construye?
```bash
npm run build
```
## ¿Cuál es la estructura?
src/
...
## ¿Cómo funciona el proyecto?

La aplicación sigue una arquitectura frontend modular. La interfaz se organiza en componentes reutilizables y cada componente se encarga de una responsabilidad concreta, como mostrar el resumen de gastos, registrar nuevos movimientos o consultar el historial.

- **Presentación:** las vistas y componentes de `src/` renderizan la información y gestionan las interacciones del usuario.
- **Estado y lógica de negocio:** la aplicación centraliza los datos de los gastos y aplica las reglas necesarias para crear, editar, eliminar y calcular totales.
- **Persistencia:** los servicios o adaptadores de datos aíslan el acceso al almacenamiento, evitando que los componentes dependan directamente de su implementación.
- **Flujo de datos:** las acciones de la interfaz actualizan el estado; los cambios de estado vuelven a renderizar los componentes y mantienen sincronizados los totales y listados.
- **Calidad:** el código se valida mediante ESLint, las pruebas automatizadas comprueban el comportamiento y el proceso de build genera la versión lista para despliegue.

## ¿Qué recursos de IA existen?

Actualmente, no se han integrado recursos de inteligencia artificial en esta aplicación. Sin embargo, se podrían considerar en el futuro para tareas como:
- Predicción de gastos futuros basados en el historial.
- Clasificación automática de los movimientos según categorías.
- Generación de reportes inteligentes y recomendaciones de ahorro.