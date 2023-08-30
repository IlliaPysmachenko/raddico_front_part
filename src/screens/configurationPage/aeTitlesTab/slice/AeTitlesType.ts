export type AeTitlesType = {
  id: string;
  name: string;
  description: string;
  host: string;
  port: string;
};

export type AeTitleSliceType = {
  aeTitlesArray: Array<AeTitlesType>,
};
