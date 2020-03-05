'use strict';

let galleryController = require('../../service/controllers/gallery');

module.exports = (app) => {
    app.get('/gallery', galleryController.getGalleryHandler);
};
