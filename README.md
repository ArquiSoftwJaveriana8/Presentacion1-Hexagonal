# Presentación 1: Arquitectura Hexagonal
## Arquitectura de Software: PUJ 2023-01
Este es un ejemplo de una aplicación que implementa la arquitectura hexagonal.
Desarrollado por:
- David Enrique Palacios García
- Maria Kamila Obregón
- Juan David Romero

Tecnologías usadas:
- Node JS (Javascript)
- Express
- Docker
- PostgreSQL
- Sequelize ORM

## Configuración de la base de datos
En una terminal ejecutar el siguiente comando de docker:
```bash
docker-compose -f config.yaml up
```
Esto creará un contenedor de postgresql con los siguientes datos:
- Host: localhost
- port: 5432
- user: postgres
- password: admin
- database: sample

## Creación de modelos con Sequelize CLI
Sequelize CLI es una herramienta que nos permite crear modelos, migraciones y seeders de forma rápida y sencilla.
Para iniciarlo utilizar el siguiente comando:

```bash
npx sequelize-cli init
```
Esto creará una carpeta llamada `config` y un archivo llamado `config.json` en la raíz del proyecto. En este archivo se configura la conexión a la base de datos.
Ahora, para crear un modelo se debe ejecutar el siguiente comando:
```bash
$ npx sequelize-cli model:generate --name Products --attributes name:string,color:string,size:string,brand:string
```
Para migrar los modelos a la base de datos:

```bash
$ npx sequelize-cli db:migrate
```