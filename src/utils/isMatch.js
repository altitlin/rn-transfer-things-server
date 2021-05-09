const { compare } = require('bcrypt')

const isMatch = (passwordCurrent, passwordUser) => compare(passwordCurrent, passwordUser)

module.exports = {
  isMatch,
}
