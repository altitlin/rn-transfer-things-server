const { hash } = require('bcrypt')

const SALT_ROUNDS = 12

const getHashedPassword = password => hash(password, SALT_ROUNDS)

module.exports = {
  getHashedPassword,
}
