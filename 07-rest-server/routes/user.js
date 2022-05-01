const {Router} = require('express');
const { check } = require('express-validator');
const { isRoleValid, emailExists } = require('../helpers/db-validators');
const { fieldValidator } = require('../middlewares/validate-fields');

const { userGet, userPost, userDelete, userPatch, userPut,  } = require('./../controllers/user')


const router = Router(); 

router.get('/', userGet)
router.post('/', 
[ 
    check('email', 'Email not valid').isEmail(),
    check('name', 'Name can not be empty').not().isEmpty(),
    // check('rol', 'Not is a valid rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol', 'Not is a valid rol').custom( isRoleValid ), // like (rol)=>isRoleValid(rol) 
    check('email', 'email exists').custom( emailExists  ), // lik like (email)=>isRoleValid(email) 
    check('password', 'Password: minimum 6 characters').isLength({min: 6}),
    fieldValidator
]
,userPost)
router.patch('/', userPatch)
router.delete('/:id', userDelete) 
router.put('/', userPut) 


module.exports = router;