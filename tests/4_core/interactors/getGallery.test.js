const galleryRepository = require('../../../lib/4_core/repositories/galleryRepository');
const mockGalleryRepository = galleryRepository;
const getGallery = require('../../../lib/4_core/interactors/getGallery');

test('should resolve with the whole gallery persisted in repository', async () => {
  // given
  mockGalleryRepository.find = () => [{id:1,status:"unknown"},{id:2,status:"unknown"}];
  // when
  const gallery = await getGallery({ galleryRepository: mockGalleryRepository });
  // then
  expect(gallery).toEqual([{id:1,status:"unknown"},{id:2,status:"unknown"}]);
});
