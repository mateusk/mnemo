class User {
   
    constructor(username, email){
        this.username = username
        this.email = email
        this.memories = []
        this.favoriteMemories = []
    }
    
    addMemory(memory){
        this.memories.push(memory)
    }

    favoriteMemory(memory){
        this.favoriteMemories.push(memory)
        memory.addFavoriteCount()
    }
}

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

/** 
* Testing classes: 
*/
const userA = new User('Mateus', 'me@mateus.com')
const memUserA = new Memory('Once upon a time...', 'Berlin')
userA.addMemory(memUserA)
console.log(userA.memories)

const userB = new User('Paloma', 'p@paloma.com')
userB.favoriteMemory(memUserA)
console.log(userA.memories.find(item => item === memUserA).favoriteCount)
