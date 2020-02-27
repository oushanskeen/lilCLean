module.exports = (_repository) => {
    return {
        persist: entity => _repository.persist(entity),
        merge: entity => _repository.merge(entity),
        getOne: id => _repository.getOne(id),
        getAll: () => _repository.getAll(),
        remove: id => _repository.remove(id), 
    };
};

