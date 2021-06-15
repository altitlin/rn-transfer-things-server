const Car = require('../models/car')

const findCarById = idCar => Car.findById(idCar)

const createCar = car => Car.create({ ...car })

const updateCarById = (id, updatedCar) => Car.findByIdAndUpdate(id, updatedCar)

module.exports = {
  findCarById,
  createCar,
  updateCarById,
}
