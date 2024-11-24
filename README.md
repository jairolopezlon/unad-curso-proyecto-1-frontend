# Prototipo Sistema de Gestión de Órdenes de Trabajo - UNAD curso Proyecto de Ingeniería I

Este proyecto es un prototipo de un **sistema web** diseñado para gestionar órdenes de trabajo, con el objetivo de mejorar la trazabilidad, organización y eficiencia en la gestión de solicitudes. El sistema reemplaza la dependencia de archivos Excel compartidos, que presentan problemas como pérdida de datos, sobreescritura y dificultad en el seguimiento de las tareas.

## Características principales

- **Módulo de autenticación y autorización**:

  - Registro e inicio de sesión de usuarios.
  - Gestión de roles y permisos para controlar las acciones de cada usuario (crear, listar, actualizar o cancelar órdenes de trabajo).

- **Módulo de gestión de órdenes de trabajo**:

  - Creación de órdenes de trabajo, asociadas a un encargado.
  - Actualización del estado de las órdenes (en progreso, completadas, canceladas) con registro histórico de cambios.
  - Listado y consulta de órdenes según permisos (usuarios solo pueden visualizar lo que les corresponde).

- **Notificaciones**:
  - Mensajes de retroalimentación sobre el estado de las acciones realizadas (éxito o error).
  - Notificaciones en tiempo real sobre actualizaciones relevantes en las órdenes de trabajo.

## Tecnologías utilizadas

- React, Typescript, Tailwind, React Router, Shadcn, Vite

## Instalación y configuración

1. Clona el repositorio:

```bash
 git clone https://github.com/usuario/unad-curso-proyecto-1-frontend.git
```

2. Instalar las dependencias:

```bash
npm install
```

3. correr el prototipo:

```bash
npm run dev
```
