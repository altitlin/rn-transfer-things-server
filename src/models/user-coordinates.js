const { model, Schema } = require('mongoose')

const userCoordinateSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = model('userCoordinate', userCoordinateSchema)
