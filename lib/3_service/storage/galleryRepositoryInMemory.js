'use strict';

    const utils = require ('../../0_utils/utils');
    const assert = utils.assert;
    const asyncAssert = utils.asyncAssert;
    const useState = utils.useState;
    const gallery = require('../../4_core/entities/gallery');

    let [store,setStore] = useState({});
    let [storeIndex,setStoreIndex] = useState(0);

     const persist = _galleryEntity => {
        const row = Object.assign({}, _galleryEntity);
        const rowId = setStoreIndex(storeIndex()+1);
        row.id = rowId;
        setStore(store[rowId] = row);
        return Promise.resolve(row);
    };

    const merge = _galleryEntity => {
        let row = store[_galleryEntity.id];
        Object.assign(row, _galleryEntity);
        return Promise.resolve(row);
    };

    const getOne = _galleryId => {
        return Promise.resolve(store[_galleryId]);
    };

    const getAll = () => {
        const dataAsArray = () => {
            return Object.keys(store).map(key => store(key));
        };
        return Promise.resolve(dataAsArray());
    };

    const remove = _galleryId => {
        setStore(delete store[_galleryId]);
    return Promise.resolve();
    };

    const galOne = gallery(
        [
            {id:1,status:'somewhat'},
            {id:2,status:'unknown'},
            {id:3,status:'unknown'}
        ]
    );
    persist(galOne);

module.exports = {
    persist,
    merge,
    getOne,
    getAll,
    remove
};