import MeasuredFeatureStatus from "../enums/MeasuredFeatureStatus";


export type IControl = {
  id: string;
  dev: number;
  devOutTot: number;
  status: MeasuredFeatureStatus;
  name: string;
};