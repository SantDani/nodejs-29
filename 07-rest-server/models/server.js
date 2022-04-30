const express = require('express')


require('dotenv').config()


class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middleware
        this.middleware();

        this.routes();
    }

    middleware(){
        // public dir
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.get('/api', (req, res)=> {
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