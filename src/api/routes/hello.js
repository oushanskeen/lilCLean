'use strict';

const helloController = 
    require('../../service/controllers/hello');

module.exports = (app) => {
    app.get('/hello', helloController.sayHelloWorld);
};
