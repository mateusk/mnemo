class Memory {
  constructor(title, text, date, place) {
    this.title = title
    this.text = text
    this.date = date
    this.place = place
    this.favoriteCount = 0

    this.place.addMemory(this)
  }

  addFavoriteCount() {
    this.favoriteCount += 1
  }
}

module.exports = Memory
