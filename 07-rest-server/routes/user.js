const {Router} = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/validate-fields');
const Role = require('../models/role');
const { userGet, userPost, userDelete, userPatch, userPut,  } = require('./../controllers/user')


const router = Router(); 

router.get('/', userGet)
router.post('/', 
[ 
    check('email', 'Email not valid').isEmail(),
    check('name', 'Name can not be empty').not().isEmpty(),
    // check('rol', 'Not is a valid rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol', 'Not is a valid rol').custom( async (rol = '' )=>{
         const existsRol = await Role.findOne({rol})

        if(!existsRol){
            throw new Error( `This role  ${rol} not exists`);
        }
    }),
    check('password', 'Password: minimum 6 characters').isLength({min: 6}),
    fieldValidator
]
,userPost)
router.patch('/', userPatch)
router.delete('/:id', userDelete) 
router.put('/', userPut) 


module.exports = router;