const request = require('supertest')
const app = require('../src/app')

describe('Test /places endpoint', () => {
  it('POST request to /places should create a place', async () => {
    const newPlace = {
      name: 'Hasenheide Park',
      location: {
        type: 'Point',
        coordinates: [1, 1],
      },
    }

    const createdPlace = (await request(app).post('/places').send(newPlace)).body
    expect(createdPlace.name).toBe(newPlace.name)
    expect(createdPlace.location).toMatchObject(newPlace.location)
  })

  it('get request to /places should list places', async () => {
    const placesList = (await request(app).get('/places')).body
    expect(placesList.length > 0).toBe(true)
  })
})
