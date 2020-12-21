class Memory {
  constructor(text) {
    this.text = text
    this.favoriteCount = 0
  }

  addFavoriteCount() {
    this.favoriteCount += 1
  }
}

module.exports = Memory
