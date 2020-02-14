const sayHello = require('../../../lib/4_core/interactors/sayHello');
const helloController = require('../../../lib/3_service/controllers/hello');
jest.mock('../../../lib/4_core/interactors/sayHello');


//const sayHelloWorld = async(req,res) =>{
//    return await res.json({message:sayHello()})
//};

let mockRequest = () => {
    const req = {}
    //req.body = jest.fn().mockReturnValue(req)
    //req.params = jest.fn().mockReturnValue(req)
    return req
  }
let mockResponse = () => {
    const res = {}
    //res.send = jest.fn().mockReturnValue(res)
    //res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
};

describe('#sayHelloWorld', () => {
    test('should resolves', async (done) => {
    //given
        // do mock request
        const req = mockRequest();
        // do mock response
        const res = mockResponse();
        //fo mock domain function
        sayHello.mockImplementationOnce(() => 'Bonjour monde !');
    
    //when
    await helloController.sayHelloWorld(req,res);

    //then
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
