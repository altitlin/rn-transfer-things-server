const { model, Schema } = require('mongoose')

const carierSchema = new Schema(
  {
    user: Schema.Types.ObjectId,
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    car: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
)

module.exports = model('carier', carierSchema)
