'use strict';

//  imports -------------------------------------------------------------------------------------------------------
    const sayHello = require('../../core/interactors/sayHello');

//  functions -----------------------------------------------------------------------------------------------------
    const sayHelloWorld = async(req,res) => await res.json({message:sayHello()});

//  exports -------------------------------------------------------------------------------------------------------
    module.exports = {
        sayHelloWorld,
    };

