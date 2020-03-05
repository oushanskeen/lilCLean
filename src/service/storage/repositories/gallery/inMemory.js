'use strict';

    const gallery = require('../../core/entities/gallery');
    const persist = async (_galleryEntity) => "stub";
    const merge = _galleryEntity => "stub";
    const getOne = async (_galleryId) => "stub";
    const getAll = () => "stub";
    const remove = _galleryId => "stub";

    module.exports = {
        persist,
        merge,
        getOne,
        getAll,
        remove
    };
