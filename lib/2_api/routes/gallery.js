'use strict';

let galleryController = require('../../3_service/controllers/gallery');

module.exports = (app) => {
    app.get('/gallery', galleryController.getGalleryHandler);
};
