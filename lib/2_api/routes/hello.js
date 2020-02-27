'use strict';

const helloController = 
    require('../../3_service/controllers/hello');

module.exports = (app) => {
    app.get('/hello', helloController.sayHelloWorld);
};
