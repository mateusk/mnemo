class Memory {
    constructor(text, place){
        this.text = text
        this.place = place
        this.favoriteCount = 0
    }

    addFavoriteCount(){
        this.favoriteCount++
    }
}

module.exports = Memory;