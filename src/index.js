class User {
    constructor(name, age){
        this.name = name,
        this.age = age,
        this.memories = []
    /**
     * Creates a new User object.
     * @typedef {Object} User
     * @param {string} username - The user's name.
     * @param {string} email - The user's e-mail.
     */
    constructor(username, email){
        this.username = username,
        this.email = email,
        this.memories = [],
        this.favoriteMemories = []
    }
    
    /**
     * @param {Memory} memory The memory to be added to the user's memory array.
     */
    addMemory(memory){
        this.memories.push(memory);
        this.memories.push(memory)
    }

    /**
     * @param {Memory} memory The memory to be added to the user's favorite memories array.
     */
    favoriteMemory(memory){
        this.favoriteMemories.push(memory)
        memory.addFavoriteCount()
    }
}

class Memory {
    /**
     * @typedef {Object} Memory
     * @param {string} text The memory text content.
     * @param {string} place The place that relates to the memory.
     */
    constructor(text, place){
        this.text = text
        this.place = place
    }
}