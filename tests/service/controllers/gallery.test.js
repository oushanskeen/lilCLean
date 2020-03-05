
//  imports ------------------------------------------------------
    const getGallery = 
        require('../../../src/core/interactors/getGallery');
    const galleryController = 
        require('../../../src/service/controllers/gallery');
    const utils = require('../../../src/utils/utils');

    jest.mock('../../../src/core/interactors/getGallery');
    const mockRequest = utils.mockRequest;
    const mockResponse = utils.mockResponse; 

//  testts ---------------------------------------------------
    describe('#getGallery', () => {
        test('should resolves', async (done) => {
        //  Given:
            const gallery = 
                [
                    {id:1,status:'luv'},
                    {id:2,status:'hate'},
                    {id:3,status:'smile'}
                ];
            const req = mockRequest();
            const res = mockResponse();
            getGallery.mockImplementationOnce(() => gallery)
        //  When:
            await galleryController.getGalleryHandler(req,res);
        //  Then:
            expect(res.json)
            .toHaveBeenCalledWith(gallery);
        done();
      });
    });

