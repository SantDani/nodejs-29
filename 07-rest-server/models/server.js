const express = require('express')
const cors = require('cors');
const dbConnection = require('../database/config');


require('dotenv').config()


class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        // Connect to DB
        this.connectDB();

        // Middleware
        this.middleware();

        this.routes();
    }

    middleware(){
        // CORS
        this.app.use(cors())

        // Read and parse Body to JSON
        this.app.use(express.json())
        
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

    async connectDB(){
        dbConnection()
    }
}

module.exports = Server;