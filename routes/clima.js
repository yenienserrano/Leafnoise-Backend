/* 
Rutas de clima
*/

const { Router } = require( 'express' )
const router = Router()
const { ubicacionActual, cliUbActual, forecast } = require('../controllers/clima')

router.get( '/location', ubicacionActual)
router.get( '/current/:city?', cliUbActual)
router.get( '/forecast/:city?', forecast)

module.exports = router
