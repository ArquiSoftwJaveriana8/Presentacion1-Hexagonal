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

Para crear un seeder:

```bash
$ npx sequelize-cli seed:generate --name demo-product
```

Para ejecutar los seeders:

```bash
$ npx sequelize-cli db:seed:all
```

## Ejecución de la aplicación
Para ejecutar la aplicación se deben ejecutar los siguientes comandos:

```bash
docker-compose -f config.yaml up
```

```bash
npm run dev
```

Esto ejecutará la base de datos Postgresql y la aplicación en el puerto 54 si está definido en .env, si no, se utilizará el puerto 3000.

## Endpoints JSON
- GET /products: Obtiene todos los productos
- GET /products/:id: Obtiene un producto por id
- POST /products: Crea un producto -> body: {name, color, size, brand}
- POST /products/txt: Crea un producto y lo guarda en files/products.txt -> body: {name, color, size, brand}
- PUT /products/:id: Actualiza un producto -> body: {name, color, size, brand}
- DELETE /products/:id: Elimina un producto

## Endpoints XML
- GET /products-xml: Obtiene todos los productos en formato XML
- POST /products-xml: Crea un producto en formato XML -> body: {name, color, size, brand}
- POST /products-xml/txt: Crea un producto en formato XML y lo guarda en files/products.txt -> body: {name, color, size, brand}

## Arquitectura del sistema
![alt text](files/Hexagonal%20Architecture%20Component.png "Arquitectura del sistema")

Link de la presentacion: https://www.canva.com/design/DAFeJKBf2xs/R17BM5KwnDVoK7vZh7Wywg/edit?utm_content=DAFeJKBf2xs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
