const { response } = require('express')

const userGet = (req, res = response)=>{   
    res.json({
        msg: 'API GET - Controller'
    })
}
const userPost = (req, res = response)=>{   
    res.json({
        msg: 'API POST - Controller'
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