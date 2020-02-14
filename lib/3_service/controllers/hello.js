'use strict';

const sayHello = require('../../4_core/interactors/sayHello');

const sayHelloWorld = async(req,res) =>{
        return await res.json({message:sayHello()})
};

module.exports = {
   sayHelloWorld,
};

