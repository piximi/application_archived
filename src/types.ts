export type Category = {
  classifierIdentifier?: string;
  color: string;
  description: string;
  identifier: string;
  index: number;
  visible: boolean;
};

export type Classifier = {
  categories: Category[];
  images: Image[];
  name: string;
};

export type Image = {
  brightness: number;
  categoryIdentifier: string;
  checksum: string;
  contrast: number;
  data: string;
  identifier: string;
  visible: boolean;
};

export type Settings = {
  spinner: {
    spinning: boolean;
  };
};
