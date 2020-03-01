import { IControl } from "./IControl";
import MeasurementStatus from "../enums/MeasuredFeatureStatus";


export type IMeasuredFeature = {
  id: string;
  status: MeasurementStatus;
  name: string;
  controls: IControl[];
};