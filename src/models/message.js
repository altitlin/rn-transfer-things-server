const { model, Schema } = require('mongoose')

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('message', messageSchema)
