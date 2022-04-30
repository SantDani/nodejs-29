const {Router} = require('express')
const { userGet, userPost, userDelete, userPatch, userPut,  } = require('./../controllers/user')


const router = Router();

router.get('/', userGet)
router.post('/', userPost)
router.patch('/', userPatch)
router.delete('/', userDelete)
router.put('/', userPut)


module.exports = router;