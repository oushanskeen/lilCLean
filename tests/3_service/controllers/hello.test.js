const sayHello = 
    require('../../../lib/4_core/interactors/sayHello');
const helloController = 
    require('../../../lib/3_service/controllers/hello');
const utils = require('../../../lib/0_utils/utils');
const mockRequest = utils.mockRequest;
const mockResponse = utils.mockResponse;

jest.mock('../../../lib/4_core/interactors/sayHello');

describe('#sayHelloWorld', () => {
    test('should resolves', async (done) => {
    // Given:
        // do mock request
        const req = mockRequest();
        // do mock response
        const res = mockResponse();
        //fo mock domain function
        sayHello.mockImplementationOnce(() => 'Bonjour monde !');
    
    // When:
    await helloController.sayHelloWorld(req,res);

    // Then:
    expect(res.json)
        .toHaveBeenCalledWith({message:'Bonjour monde !'});

    done();
  });
});
/*
describe('#sayHelloPerson', () => {
    test('should resolves', async () => {
    // given
    sayHello.mockImplementationOnce(() => 'Buongiorno John !');
    const request = { params: { name: 'John' } };
    // when
    const response = await helloController.sayHelloPerson(request);
    // then
    expect(response).toBe('Buongiorno John !');
  });
});
*/
