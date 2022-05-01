const Role = require('../models/role');

const isRoleValid = async (rol = '' )=>{
    const existsRol = await Role.findOne({rol})

   if(!existsRol){
       throw new Error( `This role  ${rol} not exists`);
   }
}

module.exports = {
    isRoleValid
}