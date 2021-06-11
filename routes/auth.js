/*     /api/auth      */

const {Router} = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validateJWT } = require('../middlewares/validar-jwt')
const router = Router()


router.post(
    '/new', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password failed').isLength({min: 6}),
        validarCampos
    ], 
    createUser)

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password failed').isLength({min: 6}),
        validarCampos
    ],
    loginUser)

router.get('/renew', validateJWT, revalidateToken)

module.exports = router;