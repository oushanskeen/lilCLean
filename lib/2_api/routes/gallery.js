'use strict';

var galleryController = require('../../3_service/controllers/gallery');

//const galleryRouter = function (app){
//module.exports = function(app){
    //app.get('/gallery', async (req, res) => {
    //    res.json({message: 'gallery received!'})
    //})
//    app.get('/gallery', galleryController.index);
//};

//var express = require('express');
//var router = express.Router();

module.exports = app => {
    app.get('/gallery', galleryController.index
        //res.json({message: 'gallery received!'})
    );
};

    //router.post('/', (req, res) {
      // Create user
    //  res.send('Some response.');
    //});

//module.exports.router = router;

//
//module.exports = {
//    galleryRouter,
//};
