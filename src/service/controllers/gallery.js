'use strict';

    const galleryRepositoryMongoose  = 
        require('../storage/repositories/gallery/inMongoose');
    const getGallery = 
        require('../../core/interactors/getGallery');
    const makeGalleryRepository = 
        require('../../core/repositories/gallery');
    
    const galleryRepository =
        makeGalleryRepository(galleryRepositoryMongoose);

    const getGalleryHandler =  async (req,res) => {
        // Input
        const galleryId = "zero";
        // Treatment
        const gallery = await getGallery(galleryId, galleryRepository);
        // Output
        res.json(gallery);
    };
    
    module.exports = {
        getGalleryHandler,
    };
