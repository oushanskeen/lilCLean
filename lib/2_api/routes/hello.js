'use strict';
const helloController = require('../../3_service/controllers/hello');

module.exports = app => {
    app.get('/hello', async (req, res) => {
        res.json({message: helloController.sayHelloWorld()})
    });
    //app.get('/hello', helloController.sayHelloWorld)
    //app.get('/hello', async (req, res) => {
    //    res.json({message: helloController.sayHelloWorld()})
    //});
    //app.get('/hello/:name', async (req, res) => {
    //    res.json({message: helloController.sayHelloPerson(req)})
    //})
    //app.get('/hello/:name', helloController.sayHelloPerson)
};


