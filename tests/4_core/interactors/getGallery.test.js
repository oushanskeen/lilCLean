const galleryRepository = 
    require('../../../lib/4_core/repositories/galleryRepository');

const mockGalleryRepository = galleryRepository;

const getGallery = 
    require('../../../lib/4_core/interactors/getGallery');

test('should resolve with the whole gallery persisted in repository', async () => {
  //given
  mockGalleryRepository.getOne = id => {
       return {id:1,status:"unknown"};
  };
  console.log('mocked repo getOne(1): ',
     mockGalleryRepository.getOne(1));
  // when
  const gallery = await getGallery(1,
        mockGalleryRepository
  );
  console.log('gallery after mock call: ', gallery);
  // then
  expect(gallery).toEqual({id:1,status:"unknown"});
});

