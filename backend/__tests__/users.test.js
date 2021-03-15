const request = require('supertest')
const app = require('../src/app')

describe('Test /users endpoint', () => {
  it('POST request to /users should create a user', async () => {
    const newUser = {
      username: `user${Date.now()}`,
      email: 'email@me.com',
    }

    const createdUser = (await request(app).post('/users').send(newUser)).body
    expect(createdUser.username).toBe(newUser.username)
    expect(createdUser.email).toBe(newUser.email)
  })

  it('GET request to /users should list users', async () => {
    const usersList = (await request(app).get('/users')).body
    expect(usersList.length > 0).toBe(true)
  })
})
