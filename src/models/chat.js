const { model, Schema } = require('mongoose')

const chatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    messages: [Schema.Types.ObjectId],
    users: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
)

module.exports = model('chat', chatSchema)
