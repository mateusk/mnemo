class User {
  constructor(username, email) {
    this.username = username
    this.email = email
    this.memories = []
    this.favoriteMemories = []
    this.favoritePlaces = []
  }

  addMemory(memory, place) {
    this.memories.push(memory)
    place.addMemory(memory)
  }

  favoriteMemory(memory) {
    this.favoriteMemories.push(memory)
    memory.addFavoriteCount()
  }

  favoritePlace(place) {
    this.favoritePlaces.push(place)
    place.addFavoriteCount()
  }
}

module.exports = User
