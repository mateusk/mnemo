const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  memories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Memory',
      autopopulate: true,
    },
  ],
  favoritedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

class Place {
  async addMemory(memory) {
    this.memories.push(memory)
    await this.save()
  }

  async addFavoritedBy(user) {
    this.favoritedBy.push(user)
    await this.save()
  }
}

placeSchema.loadClass(Place)
placeSchema.plugin(autopopulate)

module.exports = mongoose.model('Place', placeSchema)
