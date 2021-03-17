const request = require('supertest')
const moment = require('moment')
const app = require('../src/app')

describe('Test /memories endpoint', () => {
  it('POST request to /memories should create new memory', async () => {
    // POST a new place
    const newPlace = {
      name: 'Berlin',
      location: {
        type: 'Point',
        coordinates: [1, 1],
      },
    }
    const createdPlace = (await request(app).post('/api/places').send(newPlace)).body

    expect(createdPlace.name).toBe(newPlace.name)
    expect(createdPlace.location).toMatchObject(newPlace.location)

    // POST a new memory, associated with the new place
    const newMemory = {
      title: 'Saw an ET here',
      text: 'I swear it is the truth, it came as a fireball from the sky...',
      date: new Date(2003, 1, 31),
      place: createdPlace,
    }

    const createdMemory = (await request(app).post('/api/memories').send(newMemory)).body

    expect(createdMemory.title).toBe(newMemory.title)
    expect(createdMemory.text).toBe(newMemory.text)
    expect(moment(createdMemory.date).format('YYYY-MM-DD')).toBe(moment(newMemory.date).format('YYYY-MM-DD'))
    expect(createdMemory.place.id).toBe(newMemory.place.id)
  })

  it('GET request to /memories should list memories', async () => {
    const memoriesList = (await request(app).get('/api/memories')).body
    expect(memoriesList.length > 0).toBe(true)
  })
})
