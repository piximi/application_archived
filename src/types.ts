export type Classifier = {
  name: string;
};

export type Image = {
  checksum: string;
  data: string;
  identifier: string;
  categoryIdentifier: string;
};

export type Category = {
  classifierIdentifier?: string;
  color: string;
  description: string;
  identifier: string;
  index: number;
  visible: boolean;
};
