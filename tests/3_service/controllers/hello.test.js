const sayHello = require('../../../lib/4_core/interactors/sayHello');
const helloController = require('../../../lib/3_service/controllers/hello');

jest.mock('../../../lib/4_core/interactors/sayHello');

describe('#sayHelloWorld', () => {
    test('should resolves', async () => {
    // given
    sayHello.mockImplementationOnce(() => 'Bonjour monde !');
    // when
    const response = await helloController.sayHelloWorld();
    // then
    expect(response).toBe('Bonjour monde !');
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
