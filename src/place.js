class Place {
  constructor({ latitude, longitude } = {}) {
    this.latitude = latitude
    this.longitude = longitude
    this.memories = []
    this.favoriteCount = 0
  }

  addFavoriteCount() {
    this.favoriteCount += 1
  }

  addMemory(memory) {
    this.memories.push(memory)
  }
}

module.exports = Place
