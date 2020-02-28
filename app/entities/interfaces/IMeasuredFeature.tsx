import MeasuredFeatureStatus from "../enums/MeasuredFeatureStatus";
import { IControl } from "./IControl";


export type IMeasuredFeature = {
  id: string;
  status: MeasuredFeatureStatus;
  name: string;
  controls: IControl[];
};