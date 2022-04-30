const express = require('express')
const cors = require('cors')


require('dotenv').config()


class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        // Middleware
        this.middleware();

        this.routes();
    }

    middleware(){
        // CORS
        this.app.use(cors())
        // public dir
        this.app.use(express.static('public'))
    }

    routes(){
        
        this.app.use(this.pathUsers, require('../routes/user'))

    }


    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Server running at ', this.port);
        })
    }
}

module.exports = Server;