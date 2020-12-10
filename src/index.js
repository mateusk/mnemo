class User {
    constructor(name, age){
        this.name = name,
        this.age = age,
        this.memories = []
    }
    
    /**
     * @param {Memory} memory The memory to be added to the user's memory array.
     */
    addMemory(memory){
        this.memories.push(memory);
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