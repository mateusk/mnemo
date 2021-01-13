class Memory {
  constructor(title, text, place) {
    this.title = title
    this.text = text
    this.place = place
    this.favoriteCount = 0
    this.linkedMemories = []
  }

  addFavoriteCount() {
    this.favoriteCount += 1
  }

  addMemoryLink(memory) {
    this.linkedMemories.push(memory)
  }
}

module.exports = Memory
