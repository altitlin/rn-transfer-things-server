const express = require('express')

const { connectMongoDB } = require('./src/db/connect')
const { PORT } = require('./src/config/app')

const { listen } = express()

const startServer = async () => {
  try {
    await connectMongoDB()
    listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (error) {
    console.error('error', error)
  }
}

startServer()
