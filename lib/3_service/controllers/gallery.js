'use strict';

//  exports ---------------------------------------------------

    // from 0_utils  
    const utils = require ('../../0_utils/utils');
    const assert = utils.assert;
    const asyncAssert = utils.asyncAssert;
    const useState = utils.useState;
    
    // from 3_service (here)
    //gallery store 
    const galleryRepositoryInMemory  = 
        require('../storage/galleryRepositoryInMemory');
    
    // from 4_core  
    //gallery entity
    const gallery = require('../../4_core/entities/gallery');
    //gallery interactor
    const getGallery = 
        require('../../4_core/interactors/getGallery');
    //make gallery repository
    const makeGalleryRepository = 
        require('../../4_core/repositories/galleryRepository');
    
// -----------------------------------------------------------

    const galleryRepository =
        makeGalleryRepository(galleryRepositoryInMemory);

    const getGalleryHandler =  async (req,res) => {
        // Input
        const galleryId = 1;
        // Treatment
        const gallery = await 
            getGallery(galleryId, galleryRepository);
        // Output
        //return res.json({gallery:gallery.data});
        return res.json(gallery.data);
    };
    
module.exports = {
    getGalleryHandler,
};
