class User {
  constructor(username, email) {
    this.username = username
    this.email = email
    this.memories = []
    this.favoriteMemories = []
  }

  addMemory(memory) {
    this.memories.push(memory)
  }

  favoriteMemory(memory) {
    this.favoriteMemories.push(memory)
    memory.addFavoriteCount()
  }
}

module.exports = User
