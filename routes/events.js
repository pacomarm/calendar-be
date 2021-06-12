const {Router} = require('express')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { validateJWT } = require('../middlewares/validar-jwt')
const router = Router()

//to check parameters
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate')

// apply JWT validation to all endpoints
router.use( validateJWT );

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'Title is mandatory!').notEmpty(),
        check('start', 'Start Date is mandatory!').notEmpty(),
        check('start', 'Erroneous Start Date format!').custom(isDate),
        check('end', 'End Date is mandatory!').notEmpty(),
        check('end', 'Erroneous End Date format!').custom(isDate),
        validarCampos
    ],
    createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;