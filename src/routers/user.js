const { Router } = require('express')

const { LOGIN, REGISTER } = require('../constants/routesPaths')
const { login, register } = require('../controllers/user')

const router = Router()

router.post(LOGIN, login)
router.post(REGISTER, register)

module.exports = router
