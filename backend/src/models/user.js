const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  memories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Memory',
      autopopulate: true,
    },
  ],
  favoriteMemories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Memory',
      autopopulate: true,
    },
  ],
  favoritePlaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
      autopopulate: true,
    },
  ],
})
class User {
  createMemory(memory) {
    this.memories.push(memory)
    memory.place.addMemory(memory)
  }

  favoriteMemory(memory) {
    this.favoriteMemories.push(memory)
    memory.addFavoriteCount()
  }

  favoritePlace(place) {
    this.favoritePlaces.push(place)
    place.addFavoritedBy(this)
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
