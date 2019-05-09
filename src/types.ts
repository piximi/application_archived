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
  categoryIdentifier: string;
  checksum: string;
  data: string;
  identifier: string;
  partition: Partition;
  scores: Score[];
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
  visibleChannels: number[];
  contrast: number;
  visible: boolean;
};
