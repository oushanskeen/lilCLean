const assert = (_statement,_function,_positiveOutcome) => {
        return(
            JSON.stringify(_function) ===
            JSON.stringify(_positiveOutcome) 
            ? console.log(`YES! ${_statement}, ooph!`) 
            : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };
    const asyncAssert = (_statement,_function,_positiveOutcome) => {
        return(
            _function.then(res => JSON.stringify(res) ===
            JSON.stringify(_positiveOutcome))
            ? console.log(`YES! ${_statement}, ooph!`) 
            : console.log(`NOPE! ${_statement} works WRONG!!!`)
        );
    };

// 0.2 utils.useState ------------------------------------------

    const useState = _initialValue => {
        let val = _initialValue 
        const state = () => val; 
        const setState = newVal => val = newVal
        return [state, setState] 
    };

let mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
};
let mockResponse = () => {
    const res = {}
    res.data = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);    
    return res
};

module.exports = {
    assert,
    asyncAssert,
    useState,
    mockRequest,
    mockResponse
};
