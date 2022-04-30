const express = require('express')


require('dotenv').config()


class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.get('/', (req, res)=> {
            res.send('Hello world from Model Server')
        })
    }


    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Server running at ', this.port);
        })
    }
}

module.exports = Server;