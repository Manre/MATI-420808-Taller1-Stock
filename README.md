# MATI-420808-Taller1-ServiceClient
Microservices associated to Stock process

##Step No. 1: Data base set up
```vargrant up```

Este comando aprovisionará una máquina de base de datos PostgreSQL con las siguientes características:

* "username": "vagrant"
* "password": "vagrant",
* database": "stock",
* host": "192.168.50.9",
* port": 5432


##Step No. 2: NPM install
In the project root folder run the following command

```npm install```


##Step No. 3: Data base setup
Setup the data base connection. File config/config.json

```
{
    "development": {
        "username": "vagrant",
        "password": "vagrant",
        "database": "stock",
        "host": "192.168.50.9",
        "port": 5432,
        "dialect": "postgres"
    },
    "test": {
        "username": "vagrant",
        "password": "vagrant",
        "database": "stock",
        "host": "192.168.50.9",
        "port": 5432,
        "dialect": "postgres"
    }
}
```


##Step No. 4: Data base schema setup
Create the database table with the following command

```$ sequelize db:migrate```


##Final step: run the application
Run the application with following command

```npm run start:dev```

And visiting http://localhost:3001
