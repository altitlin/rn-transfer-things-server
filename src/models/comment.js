const { model, Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    estimation: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('comment', commentSchema)
