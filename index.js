const express = require('express')

const { connectMongoDB } = require('./src/db/connect')
const { ROOT, AUTH, CAR } = require('./src/constants/routesPaths')
const { PORT } = require('./src/config/app')

const app = express()

app.use(express.json({ extended: true }))

app.use(`${ROOT}${AUTH}`, require('./src/routers/user'))
app.use(`${ROOT}${CAR}`, require('./src/routers/car'))

const startServer = async () => {
  try {
    await connectMongoDB()
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (error) {
    console.error('error', error)
  }
}

startServer()
