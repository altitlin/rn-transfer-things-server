const { StatusCodes, getReasonPhrase } = require('http-status-codes')

const { findCarById, createCar, updateCarById } = require('../services/car')

const { OK, BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = StatusCodes

const getCarById = async (req, res) => {
  const {
    params: { id }
  } = req.body

  try {
    const car = await findCarById(id)

    if (!car) {
      return res
        .status(BAD_REQUEST)
        .send({ error: getReasonPhrase(BAD_REQUEST) })
    }

    res.status(OK).json({ car })
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: getReasonPhrase(INTERNAL_SERVER_ERROR) })
  }
}

const createNewCar = async (req, res) => {
  const { car } = req.body

  try {
    await createCar(car)

    res
    .status(CREATED)
    .json({ message: getReasonPhrase(CREATED) })
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: getReasonPhrase(INTERNAL_SERVER_ERROR) })
  }
}

const updateCar = async (req, res) => {
  const {
    params: { id },
    updatedCar
  } = req.body

  try {
    await updateCarById(id, updatedCar)
  } catch (error) {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: getReasonPhrase(INTERNAL_SERVER_ERROR) })
  }
}

module.exports = {
  getCarById,
  updateCar,
  createNewCar,
}
