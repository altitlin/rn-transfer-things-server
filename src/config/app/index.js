const { config } = require('dotenv')

const { DEFAULT_PORT } = require('./defult')

config()

const { PORT = DEFAULT_PORT } = process.env

module.exports = {
  PORT,
}
