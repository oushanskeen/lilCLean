const sayHello = require('../../../lib/4_core/interactors/sayHello');

test('should resolve with "Hello world!" when name is not defined (undefined or null)', async () => {
  // when
  const result = await sayHello();
  // then
  expect(result).toBe('Hello world!');
});

test('should resolve with "Hello _name_!" when name is provided', async () => {
  // given
  const name = 'John';
  // when
  const result = await sayHello(name);
  // then
  expect(result).toBe('Hello John!');
});
