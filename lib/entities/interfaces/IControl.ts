import MeasurementStatus from "../enums/MeasuredFeatureStatus";


export type IControl = {
  id: string;
  dev: number;
  devOutTot: number;
  status: MeasurementStatus;
  name: string;
};