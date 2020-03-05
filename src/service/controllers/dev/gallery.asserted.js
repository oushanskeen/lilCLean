'use strict';

// exports ---------------------------------------------------

    const utils = require ('../../utils/utils');
    const assert = utils.assert;
    const asyncAssert = utils.asyncAssert;
    const useState = utils.useState;

    const gallery = require('../../core/entities/gallery');

    const galleryRepositoryInMemory  = 
        require('../storage/galleryRepositoryInMemory');

    const makeGalleryRepository = 
        require('../../core/repositories/galleryRepository');

    const getGallery = 
        require('../../core/interactors/getGallery');

// -----------------------------------------------------------

const galleryRepository =
    makeGalleryRepository(galleryRepositoryInMemory);

    console.log('gallery repo: ', galleryRepository );
   
    const getGalleryHandler =  async (req,res) => {
        // Input
           const galleryId = 2;
        // Treatment
           const gallery = //await 
               getGallery(galleryId, galleryRepository);

            console.log('gallery inside handler: ', gallery);
        // Output
           return await res.json({gallery:gallery.data});
       
    };
    /*
    getGalleryHandler(req,res).then(res => console.log(
        'res after getGalleryHandler:' , res
    ));
    asyncAssert('getGallery() returns gallery default entity',
        // Given: 
        //  store = {data:['new gallery mock data'], id:1}, 
        // When: 
        getGalleryHandler(req,res),
        // Then:
        [
            {id:1,status:'unknown'},
            {id:2,status:'unknown'},
            {id:3,status:'unknown'}
        ]
    );
    */
    
module.exports = {
    getGalleryHandler,
};
