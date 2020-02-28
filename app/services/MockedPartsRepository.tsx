import MeasuredFeatureStatus from "../entities/enums/MeasuredFeatureStatus";
import { IMeasuredFeature } from "../entities/interfaces/IMeasuredFeature";
import IPart from "../entities/interfaces/IPart";
import IPartsRepository from "../entities/interfaces/IPartsRepository";


const mockedFeatures: IMeasuredFeature[] = [
  {
    id: "feature01",
    name: "Feature #1",
    status: MeasuredFeatureStatus.OK,
    controls: [
      {
        id: "fe1_control1",
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control2",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control3",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control4",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control5",
        name: "X",
        dev: 2,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control6",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control7",
        name: "Z",
        dev: 1,
        devOutTot: 1.4,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control8",
        name: "Diameter",
        dev: 1,
        devOutTot: 1.2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control9",
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control10",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control11",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control12",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control13",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control14",
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control15",
        name: "Y",
        dev: 1,
        devOutTot: 1,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control16",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control17",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control18",
        name: "X",
        dev: 1,
        devOutTot: 1,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control19",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control20",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control21",
        name: "Diameter",
        dev: 3,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control22",
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control23",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe1_control24",
        name: "Z",
        dev: 2,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
  {
    id: "feature02",
    name: "Feature #2",
    status: MeasuredFeatureStatus.Alarm,
    controls: [
      {
        id: "fe2_control1",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control2",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control3",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control4",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control5",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control6",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control7",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control8",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control9",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control10",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control11",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe2_control12",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
  {
    id: "feature03",
    name: "Feature #3",
    status: MeasuredFeatureStatus.Warning,
    controls: [
      {
        id: "fe3_control1",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe3_control2",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe3_control3",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe3_control4",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },

    ]
  },
  {
    id: "feature04",
    name: "Feature #4",
    status: MeasuredFeatureStatus.OK,
    controls: [
      {
        id: "fe4_control1",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe4_control2",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe4_control3",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe4_control4",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },

    ]
  },
  {
    id: "feature05",
    name: "Feature #5",
    status: MeasuredFeatureStatus.Alarm,
    controls: [
      {
        id: "fe5_control1",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control2",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control3",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control4",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control5",
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control6",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control7",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control8",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control9",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control10",
        name: "Y",
        dev: 2.5,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control11",
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        id: "fe5_control12",
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
];

let runs = 1;

const recalculateNewRandomizedDeviations = () => {
  mockedFeatures.forEach((feature, index) =>
    feature.controls.forEach((control, index) => {
      control.dev = control.dev + (Math.random() > .5 ? Math.random() : -Math.random() / 5);
      runs++;
      control.devOutTot = (control.devOutTot * runs + control.dev) / runs;
    })
  );
}

class MockedPartsRepository implements IPartsRepository {
  private mockedParts: IPart[] = [{ id: "1", name: "Part 1", features: mockedFeatures }];

  static POLLING_INTERVAL_MS = 10000;

  list() {
    return [{ partId: "1" }];
  }

  subscribe(partId: string, onDataChange: (part: IPart) => void): () => void {
    setTimeout(() => onDataChange(this.mockedParts.filter(part => part.id === partId)[0]), 300);
    return;
    onDataChange(this.mockedParts.filter(part => part.id === partId)[0]);
    const mockedPolling = () => {
      onDataChange(this.mockedParts.filter(part => part.id === partId)[0]);
    }
    const interval = setInterval(mockedPolling)
    const desubscribe = () => {
      clearInterval(interval);
    }

    return desubscribe;
  }

  static getInstance(): IPartsRepository {
    return new MockedPartsRepository();
  }
};

export default MockedPartsRepository; 