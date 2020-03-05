
//  exports --------------------------------------------------
    const app = require('../../../src/host/server');
    const request = require('supertest');

//  tests -----------------------------------------------------
    describe('When you call /hello', () => {
        test('responds with hello world', async (done) => {
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
