import images from './images';
import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

describe('images', () => {
  it('should return the initial state', () => {
    expect(images(undefined, {})).toEqual({});
  });

  it('should CREATE_IMAGE', () => {
    const testImage = {
      filename: './public/images/subpopulation/metaphase/7_3338_191.png'
    };

    expect(
      images(
        {},
        {
          type: CREATE_IMAGE,
          images: testImage
        }
      )
    ).toEqual({
      images: testImage
    });
  });

  it('should DELETE_IMAGE', () => {
    const identifier = '16e0e1b8-ae79-46f5-80cf-58e7f8dda344';

    expect(
      images(
        [
          {
            identifier: identifier
          }
        ],
        {
          type: DELETE_IMAGE,
          identifier
        }
      )
    ).toEqual([]);
  });
});
