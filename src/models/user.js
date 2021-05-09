const { model, Schema } = require('mongoose')

const userSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('user', userSchema)
