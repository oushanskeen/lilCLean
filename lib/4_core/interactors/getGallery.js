'use strict';

module.exports = (_galleryId,_galleryRepository) => {
    return _galleryRepository.getOne(_galleryId); 
};
