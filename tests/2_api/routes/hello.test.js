const app = require('../../../lib/1_host/server'); // Link to 
const request = require('supertest');

it('tests to see if Jest works', () => {
  expect(1).toBe(1)
});

describe('When you call /hello', () => {
    test(
        'responds with json containing hello world', 
        async (done) => {
         // Given:
            const data = {message:"Hello world!"};
         // When:
            const response = await request(app).get('/hello')
            //.set('Accept', 'application/json')
            //.expect('Content-Type', /json/)  
         // Then:
            expect(response.status)
                .toBe(200);
            expect(response.body)
                .toEqual(data);
            done();
    });
});
