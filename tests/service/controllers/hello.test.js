   
//  imports --------------------------------------------
    const sayHello = 
        require('../../../src/core/interactors/sayHello');
    const helloController = 
        require('../../../src/service/controllers/hello');
    const utils = require('../../../src/utils/utils');

    jest.mock('../../../src/core/interactors/sayHello');
    const mockRequest = utils.mockRequest;
    const mockResponse = utils.mockResponse;

//  tests -------------------------------------------------
    describe('#sayHelloWorld', () => {
        test('should resolves', async (done) => {
         // Given:
            const req = mockRequest();
            const res = mockResponse();
            sayHello
            .mockImplementationOnce(() => 'Bonjour monde !');
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
