'use strict';
const helloController = 
    require('../../3_service/controllers/hello');

//const handler = async(req,res) =>{
//        return await res.json({message:"Hello world!"});
//};
const handler = helloController.sayHelloWorld;

module.exports = (app) => {
    //app.get('/hello', await helloController.sayHelloWorld);
    app.get('/hello', handler);
};
