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
  partition: Partition;
  scores: Score[];
  visible: boolean;
  visualization: ImageVisualization;
};

export enum Partition {
  Training,
  Validation,
  Test
}

export type Score = {
  categoryIdentifier: string;
  probability: number;
};

export type Settings = {
  spinner: {
    spinning: boolean;
  };
};

export type ImageVisualization = {
  brightness: number;
  contrast: number;
  visible: boolean;
};
