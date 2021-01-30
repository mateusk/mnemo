class User {
  constructor(username, email) {
    this.username = username
    this.email = email
    this.memories = []
    this.favoriteMemories = []
    this.favoritePlaces = []
  }

  get profile() {
    return {
      username: this.username,
      email: this.email,
      memories: this.memories,
      favoriteMemories: this.favoriteMemories,
      favoritePlaces: this.favoritePlaces,
    }
  }

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
    place.addFavoriteCount()
  }
}

module.exports = User
