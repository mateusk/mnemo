class Memory {
  constructor(title, text, date, place) {
    this.title = title
    this.text = text
    this.date = date
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
