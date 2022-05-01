const express = require('express')

const cors = require('cors');
const dbConnection = require('../database/config');
const { request } = require('express');


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
        // this.mock(20)
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


    async mock(totalUsers =20){


   
        for (var i = 0; i < totalUsers; i++) {
            this.newUser(i)
         }
    }

    newUser(index){
        let user = {
            "name": `user${index}`,
            "email": `email${index}@email.com`,
            "password": "123456789",
            "rol": "ADMIN_ROLE",
            "status": true,
            "img": "",
            "google": true
        }
        const userOptions ={
            uri: `${this.pathUsers}`,
            body: JSON.stringify(user),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        this.app.request(userOptions, (error, res)=>{
            console.log('New user')

        })

        
        // this.app.post(this.pathUsers, (req, res)=>{
        //     res.send(req.bo)
        // })
    }
}

module.exports = Server;