const { sign } = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/app/index')

const getToken = user => sign(
  { user },
  JWT_SECRET,
  {
    expiresIn: '1h',
  }
)

module.exports = {
  getToken,
}
