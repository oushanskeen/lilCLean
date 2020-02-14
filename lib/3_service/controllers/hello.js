'use strict';

//const sayHello = require('../../4_core/interactors/sayHello');

//const sayHelloWorld = async () =>{
//    let response = await sayHello();
//    return {message:response};
//};

const sayHelloWorld = async(req,res) =>{
        return await res.json({message:"Hello world!"})
};

module.exports = {
   sayHelloWorld,
};

