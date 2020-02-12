const app = require('../../../lib/1_host/server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('Async test', async done => {
  // Do your async tests here
  const response = await request.get('/gallery');
  console.log(response.body);
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('gallery received!');
  done()
})

/*
// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})
it('Async test', async done => {
  // Do your async tests here
  expect(true).toBe(true)
  done()
})
*/
