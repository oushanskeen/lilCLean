// entity import:
   const getGallery = 
       require('../../../lib/4_core/interactors/getGallery');
// controller import:
   const galleryController = 
       require('../../../lib/3_service/controllers/gallery');
//  utils import:
    const utils = require('../../../lib/0_utils/utils');
    const mockRequest = utils.mockRequest;
    const mockResponse = utils.mockResponse; 

jest.mock('../../../lib/4_core/interactors/getGallery');

describe('#getGallery', () => {
    test('should resolves', async (done) => {
    //given
        // do mock data
        // what etity returns
        const gallery = {data:
            [
                {id:1,status:'luv'},
                {id:2,status:'hate'},
                {id:3,status:'smile'}
            ]
        };
        // do mock request
        const req = mockRequest();
        // do mock response
        const res = mockResponse();
        //do mock domain function
        getGallery.mockImplementationOnce(() => gallery)
    //when
    await
        galleryController.getGalleryHandler(req,res);
    //then
    expect(res.json)
        .toHaveBeenCalledWith(gallery.data);
    done();
  });
});

