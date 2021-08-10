const express = require('express');
const cors = require('cors');

class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userspath = '/api/users';

        
        //Middlewares funcion que ejecuta al levantar el servidor
        this.middlewares();

        //rutas de aplicacion
        this.routes();

    }


    middlewares(){

        //cors
        this.app.use(cors());

        //Parse y lectura del body
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public') );


    }



    routes(){

        this.app.use(this.userspath, require('../routes/user'));

    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor en ', this.port);
        });
    }


}

module.exports = Server;

/*Subir RESTserver en heroku
git init
git add .
git commit -m "primer commit"





*/