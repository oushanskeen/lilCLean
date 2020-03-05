'use strict';

//  imports ------------------------------------------------------------------------------------------------------
    let mongoose = require('mongoose');

//  models -------------------------------------------------------------------------------------------------------
    const Gallery = mongoose.model('Gallery', { name: String, data:[], });

//  functions ----------------------------------------------------------------------------------------------------
    const persist = _galleryEntity => "stub";
    const merge = _galleryEntity => "stub";
    const getOne = async (_galleryId) => {
        let response = await Gallery.find({"name":_galleryId});
        return response[0].data;
    };
    const getAll = () => "stub";
    const remove = _galleryId => "stub";

//  exports -----------------------------------------------------------------------------------------------------
    module.exports = {
        persist,
        merge,
        getOne,
        getAll,
        remove
    };
