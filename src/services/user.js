const User = require('../models/user')

const findUserByPhone = phone => User.findOne({ phone })

const createUser = user => User.create({ ...user })

module.exports = {
  findUserByPhone,
  createUser,
}
