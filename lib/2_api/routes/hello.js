'use strict';
//const helloController = 
//    require('../../3_service/controllers/hello');
//helloController.sayHelloWorld();
//jets.mock('../../3_service/controllers/hello');

module.exports = (app) => {
    //app.get('/hello', await helloController.sayHelloWorld);
    app.get('/hello', async(req,res)=>{
        await res.json({message:"Hello world!"})
    });
};


