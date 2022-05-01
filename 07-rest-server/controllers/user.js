const { response, request } = require('express');
const crypt = require('bcryptjs')

const User = require('../models/user')

const userGet = (req = request, res = response)=>{   

    const {type, search, limit = 10, page = 1} = req.query;
    res.json({
        msg: 'API GET - Controller',
        type,
        search,
        limit,
        page
    })
}
const userPost = async (req = request, res = response)=>{  

    const id = req.params.id;
    const {name, email, password, rol} = req.body;

    const user = new User({name, email, password, rol});

    // verify email
    const salt = crypt.genSaltSync();
    user.password = crypt.hashSync(password, salt)
    // Encrypt password

    // Save to DB
    
    user.save();
    res.json({
        msg: 'API POST - Controller',
        user
    })
}
const userDelete = (req, res = response)=>{   
    res.json({
        msg: 'API DELETE - Controller'
    })
}
const userPatch = (req, res = response)=>{   
    res.json({
        msg: 'API PATCH - Controller'
    })
}
const userPut = (req, res = response)=>{   
    res.json({
        msg: 'API PUT - Controller'
    })
}

module.exports = {
    userGet, 
    userDelete, 
    userPatch, 
    userPost,
    userPut
}