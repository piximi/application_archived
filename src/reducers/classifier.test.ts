import classifier, {
  createCategoryAction,
  createClassifierAction,
  createImageAction,
  deleteCategoryAction,
  deleteImageAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImageContrastAction,
  updateImageVisibilityAction
} from './classifier';
import { Category, Classifier, Image, Partition } from '../types';

describe('classifier', () => {
  // it('addCategoryAction', () => {
  //   const payload = {};
  //
  //   const action = addCategoryAction(payload);
  //
  //   const reducer = classifier(state, action);
  //
  //   const expected: Classifier = state;
  //
  //   expected.categories = [];
  //
  //   expect(reducer).toEqual(expected)
  // });

  it('createCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const category: Category = {
      classifierIdentifier: undefined,
      color: '#FFFFFF',
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visible: true
    };

    const payload = {
      category: category
    };

    const action = createCategoryAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('createClassifierAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      name: 'example'
    };

    const action = createClassifierAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'example'
    };

    expect(reducer).toEqual(expected);
  });

  it('createImageAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const image: Image = {
      brightness: 0.0,
      categoryIdentifier: '00000000-0000-0000-0000-000000000000',
      checksum: '',
      contrast: 0.0,
      data: '',
      identifier: '11111111-1111-1111-1111-11111111111',
      partition: Partition.Training,
      scores: [],
      visible: true,
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true
      }
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      image: image
    };

    const action = createImageAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0.0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0.0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  // it('createImageScoreAction', () => {
  //   const payload = {};
  //
  //   const action = createImageScoreAction(payload);
  //
  //   const reducer = classifier(state, action);
  //
  //   const expected: Classifier = state;
  //
  //   expected.categories = [];
  //
  //   expect(reducer).toEqual(expected)
  // });

  it('deleteCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = deleteCategoryAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('deleteImageAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0.0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0.0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = deleteImageAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('toggleCategoryVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = toggleCategoryVisibilityAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: false
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryColorAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      color: '#000000'
    };

    const action = updateCategoryColorAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#000000',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryDescriptionAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      description: 'updated',
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateCategoryDescriptionAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'updated',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateCategoryVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      visible: false
    };

    const action = updateCategoryVisibilityAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: false
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateClassifierNameAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'Untitled classifier'
    };

    const payload = {
      name: 'updated'
    };

    const action = updateClassifierNameAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [],
      name: 'updated'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageBrightnessAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      brightness: 1,
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageBrightnessAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 1,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageCategoryAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '22222222-2222-2222-2222-22222222222',
      categoryIdentifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageCategoryAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        },
        {
          classifierIdentifier: undefined,
          color: '#FFFFFF',
          description: 'example',
          identifier: '11111111-1111-1111-1111-11111111111',
          index: 1,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '11111111-1111-1111-1111-11111111111',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '22222222-2222-2222-2222-22222222222',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageContrastAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      contrast: 1,
      identifier: '11111111-1111-1111-1111-11111111111'
    };

    const action = updateImageContrastAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 1,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });

  it('updateImageVisibilityAction', () => {
    const state: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: true,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    const payload = {
      identifier: '11111111-1111-1111-1111-11111111111',
      visible: false
    };

    const action = updateImageVisibilityAction(payload);

    const reducer = classifier(state, action);

    const expected: Classifier = {
      categories: [
        {
          classifierIdentifier: undefined,
          color: '#F8F8F8',
          description: 'Unknown',
          identifier: '00000000-0000-0000-0000-000000000000',
          index: 0,
          visible: true
        }
      ],
      images: [
        {
          brightness: 0,
          categoryIdentifier: '00000000-0000-0000-0000-000000000000',
          checksum: '',
          contrast: 0,
          data: '',
          identifier: '11111111-1111-1111-1111-11111111111',
          partition: Partition.Training,
          scores: [],
          visible: false,
          visualization: {
            brightness: 0,
            contrast: 0,
            visible: true
          }
        }
      ],
      name: 'Untitled classifier'
    };

    expect(reducer).toEqual(expected);
  });
});
