
//  imports -----------------------------------------------    
    const galleryRepository = 
        require('../../../src/core/repositories/gallery');
    const mockGalleryRepository = galleryRepository;
    const getGallery = 
        require('../../../src/core/interactors/getGallery');

//  tests -----------------------------------------------
    test(`should resolve with the whole 
        gallery persisted in repository`, async () => {
      // Given:
      mockGalleryRepository.getOne = id => {
           return {id:1,status:"unknown"};
      };
      // When:
      const gallery = await getGallery(1,
            mockGalleryRepository
      );
      // Then:
      expect(gallery).toEqual({id:1,status:"unknown"});
    });

