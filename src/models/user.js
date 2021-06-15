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
    lastName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    comments: [Schema.Types.ObjectId],
    chats: [Schema.Types.ObjectId],
    messages: [Schema.Types.ObjectId],
    coordinate: Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
)

module.exports = model('user', userSchema)
