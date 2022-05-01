const { response, request } = require('express');

const crypt = require('bcryptjs')

const User = require('../models/user')

const userGet = (req = request, res = response) => {

    const { type, search, limit = 10, page = 1 } = req.query;
    res.json({
        msg: 'API GET - Controller',
        type,
        search,
        limit,
        page
    })
}
const userPost = async (req = request, res = response) => {


    const { name, email, password, rol } = req.body;

    const user = new User({ name, email, password, rol });



    // Encrypt password
    const salt = crypt.genSaltSync();
    user.password = crypt.hashSync(password, salt)

    // Save to DB

    user.save();
    res.json({
        msg: 'API POST - Controller',
        user
    })
}
const userDelete = (req, res = response) => {
    res.json({
        msg: 'API DELETE - Controller'
    })
}
const userPatch = (req, res = response) => {
    res.json({
        msg: 'API PATCH - Controller'
    })
}
const userPut = async(req = request, res = response) => {

    const id = req.params.id;

    const { password, google, email,...userUpdate } = req.body;

    
    if (password) {
        // Encrypt password
        const salt = crypt.genSaltSync();
        userUpdate.password = crypt.hashSync(password, salt)
    }
    
    const user = await User.findByIdAndUpdate(id, userUpdate)



    res.json({
        msg: 'API PUT - Controller',
        id,
        user
    })
}

module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}