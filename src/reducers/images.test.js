import images from './images';
import { CREATE_IMAGE, DELETE_IMAGE } from '../constants';

describe('images', () => {
  it('should return the initial state', () => {
    expect(images(undefined, {})).toEqual({});
  });

  it('should CREATE_IMAGE', () => {
    const image = {
      pathname: 'example.png'
    };

    expect(
      images([], {
        type: CREATE_IMAGE,
        image
      })
    ).toEqual({
      imageByteStrings: undefined,
      images: {
        pathname: 'example.png'
      }
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
