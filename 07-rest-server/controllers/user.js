const { response, request } = require('express')

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
const userPost = (req = request, res = response)=>{  

    const id = req.params.id;
    const body = req.body;
    res.json({
        msg: 'API POST - Controller',
        body: body,
        id: id
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