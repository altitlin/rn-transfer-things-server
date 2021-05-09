const { config } = require('dotenv')

const { DEFAULT_PORT, DEFAULT_JWT_SECRET } = require('./defult')

config()

const {
  PORT = DEFAULT_PORT,
  JWT_SECRET = DEFAULT_JWT_SECRET,
} = process.env

module.exports = {
  PORT,
  JWT_SECRET,
}
