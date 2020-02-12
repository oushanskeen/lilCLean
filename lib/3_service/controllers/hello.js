'use strict';

const sayHello = require('../../4_core/interactors/sayHello');

const sayHelloWorld = () => sayHello();
const sayHelloPerson = request => sayHello(request.params.name);

module.exports = {
   sayHelloWorld,
   sayHelloPerson
};

