const app = require('../../../lib/1_host/server'); // Link to 
const request = require('supertest');

    it('Testing to see if Jest works', () => {
      expect(1).toBe(1)
    });

describe('When you cal /hello', () => {
    test(
        'responds with json containing hello world', 
        async (done) => {
            //given
            const response = await request(app).get('/hello')
            //.set('Accept', 'application/json')
            //.expect('Content-Type', /json/)
            expect(response.status)
                .toBe(200);
            expect(response.body)
                .toEqual({message:"Hello world!"});
            done();
    });
});
