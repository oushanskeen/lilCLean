const app = require('../../../lib/1_host/server'); // Link to 
const request = require('supertest');

it('When you call /gallery', async (done) => { 
 // Given:
    const data = 
            [
                {id:1,status:'unknown'},
                {id:2,status:'unknown'},
                {id:3,status:'unknown'}
            ];
 // When: 
    const response = await request(app).get('/gallery')
 // Then:
    expect(response.status)
        .toBe(200);
    expect(response.body)
        .toEqual(data);
    done();
});

