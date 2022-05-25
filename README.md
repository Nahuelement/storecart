## next.js Teslo-shop App

para correr localmente, se necesita la base de datos

```
docker-compose up -d

```
* el -d, significa __detached__, que corrar aparte de la consola 

* MongoDBURL Local:
````
mongodb://localhost:27017/entriesdb

````
##Configurar las varibles de entorno
renombrar el archivo  __.env.template__ a __.env__

* MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/teslodb

```
