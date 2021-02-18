const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const memorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  favoritedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

class Memory {
  async addFavoritedBy(user) {
    this.favoritedBy.push(user)
    await this.save()
  }
}
memorySchema.loadClass(Memory)
memorySchema.plugin(autopopulate)

module.exports = mongoose.model('Memory', memorySchema)
