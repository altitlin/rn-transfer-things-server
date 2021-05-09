const { connect } = require('mongoose')

const { MONGODB_URI } = require('../config/dbConfig')

const connectMongoDB = async () => {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.log('MongoDB success connect')
  } catch (error) {
    console.error('error', error)
  }
}

module.exports = {
  connectMongoDB,
}
