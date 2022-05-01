const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async (rol = '') => {
    const existsRol = await Role.findOne({ rol })

    if (!existsRol) {
        throw new Error(`This role  ${rol} not exists`);
    }
}

const emailExists = async (email = '') => {
    // verify email exists
    const existsEmail = await User.findOne({ email })

    if (existsEmail) {
        throw new Error(`Email "${email}" already used`)
    }
}

const existsUserById = async (id) => {

    const existUser = await User.findById(id);

    if (!existUser) throw new Error(`Id "${id} not exists"`)
}

module.exports = {
    isRoleValid,
    emailExists, 
    existsUserById
}