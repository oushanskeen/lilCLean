'use strict';

    const utils = require ('../../0_utils/utils');
    const assert = utils.assert;
    const asyncAssert = utils.asyncAssert;
    const useState = utils.useState;
    const gallery = require('../../4_core/entities/gallery');

    let [store,setStore] = useState({});
    console.log('initial store: ', store());
    // dataStoreIndex
    let [storeIndex,setStoreIndex] = useState(0);
    console.log('initial storeIndex: ', storeIndex());

     const persist = _galleryEntity => {
        const row = Object.assign({}, _galleryEntity);
        const rowId = setStoreIndex(storeIndex()+1);
        row.id = rowId;
        setStore(store[rowId] = row);
        return Promise.resolve(row);
    };
    asyncAssert('persist() returns store with saved entity',
        // Given: 
        // store === {}, id === 0
        // When:
        persist({data:['some gallery mock data']}),
        // Then: 
        {data:['some gallery mock data'], id:1}
    );

    const merge = _galleryEntity => {
        let row = store[_galleryEntity.id];
        Object.assign(row, _galleryEntity);
        return Promise.resolve(row);
    };
    asyncAssert('merge() returns store with resaved entity',
        // Given: 
        //  store = {data:['some gallery mock data'], id:1}
        // When: 
        merge({data:['new gallery mock data'], id:1}),
        // Then:
        {data:['new gallery mock data'], id:1}
    );

    const getOne = _galleryId => {
        return Promise.resolve(store[_galleryId]);
    };
    asyncAssert('getOne() returns entity by given id',
        // Given: 
        //  store = {data:['new gallery mock data'], id:1}, 
        // When: 
        getOne(1),
        // Then:
        {data:['new gallery mock data'], id:1}
    );

    const getAll = () => {
        const dataAsArray = () => {
            return Object.keys(store).map(key => store(key));
        };
        return Promise.resolve(dataAsArray());
    };
    asyncAssert('getAll() returns all entities',
        // Given: 
        //  store = {data:['new gallery mock data'], id:1}, 
        // When: 
        getAll(),
        // Then:
        [{data:['new gallery mock data'], id:1}]
    );


    const remove = _galleryId => {
        setStore(delete store[_galleryId]);
    return Promise.resolve();
    };
    asyncAssert('remove() returns store with removed entity',
        // Given: 
        //  store = {data:['new gallery mock data'], id:1}, 
        // When: 
        remove(1),
        // Then:
        {}
    );

    const galOne = gallery(
        [
            {id:1,status:'unknown'},
            {id:2,status:'unknown'},
            {id:3,status:'unknown'}
        ]
    );
    persist(galOne);//.then(res => console.log('galOne persisted: ', res));
    console.log('store after galOne persist(): ', store());

module.exports = {
    persist,
    merge,
    getOne,
    getAll,
    remove
};
