
//  exports ---------------------------------------------------
    const app = require('../../../src/host/server'); 
    const request = require('supertest');

//  tests ------------------------------------------------------
    describe('When you call /gallery', () => {
        test('responds with stub gallery', async (done) => { 
         // When: 
            const response = await request(app).get('/gallery')
         // Then:
            expect(response.status)
                .toBe(200);
            expect(response.headers["content-type"])
                .toBe("application/json; charset=utf-8");
            done();
        });
    });
