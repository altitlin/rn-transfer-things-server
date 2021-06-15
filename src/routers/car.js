const { Router } = require('express')

const { CAR } = require('../constants/routesPaths')
const { createNewCar, getCarById, updateCar } = require('../controllers/car')

const router = Router()

router.get(CAR, getCarById)
router.put(`${CAR}/:id`, updateCar)
router.post(CAR, createNewCar)

module.exports = router
