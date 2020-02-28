import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenTitle } from '../components/common/ScreenTitle';
import Visible from '../components/common/Visible';
import { MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN, MeasuredFeature } from '../components/MeasurementsGrid/MeasuredFeature';
import MeasuredFeatureStatus from '../entities/enums/MeasuredFeatureStatus';
import { IMeasuredFeature } from '../entities/interfaces/IMeasuredFeature';
import IPart from '../entities/interfaces/IPart';
import MockedPartsRepository from '../services/MockedPartsRepository';


const mockedFeatures: IMeasuredFeature[] = [
  {
    name: "Feature #1",
    status: MeasuredFeatureStatus.OK,
    controls: [
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "X",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
  {
    name: "Feature #2",
    status: MeasuredFeatureStatus.Alarm,
    controls: [
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
  {
    name: "Feature #3",
    status: MeasuredFeatureStatus.Warning,
    controls: [
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },

    ]
  },
  {
    name: "Feature #4",
    status: MeasuredFeatureStatus.OK,
    controls: [
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },

    ]
  },
  {
    name: "Feature #5",
    status: MeasuredFeatureStatus.Alarm,
    controls: [
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Y",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Z",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
      {
        name: "Diameter",
        dev: 1,
        devOutTot: 2,
        status: MeasuredFeatureStatus.OK,
      },
    ]
  },
]

function doesFeatureFitWithNext(controlsLength: number, nextFeature: IMeasuredFeature) {
  return controlsLength <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 2 && nextFeature
    && nextFeature.controls.length <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 2;
}

enum PartStatus {
  Uninitialized = "uninitialized",
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
};

const initialPartState: IPart = null;

type State = {
  partStatus: PartStatus;
  partIds: string[];
  selectedPartId?: string;
  lastRenderCellsHeights?: string;
};

const initialState: State = {
  partStatus: PartStatus.Uninitialized,
  partIds: []
};

const fakeRepository = MockedPartsRepository.getInstance();

export function MainScreen() {
  const [part, setPart] = useState(initialPartState);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.partStatus === PartStatus.Uninitialized) {
        try {
          const partsList = fakeRepository.list();
          setState({ ...state, partStatus: PartStatus.Loading })
          return fakeRepository.subscribe(partsList[0].partId, part => {
            setPart(part);
            setState({ ...state, partStatus: !!part ? PartStatus.Loaded : PartStatus.Error });
          });
        } catch (e) {
          console.warn("MainScreen: error subscribing to repository", e);
          setState({ ...state, partStatus: PartStatus.Error });
        }
    }
  }, [part]);

  return (
    <View style={styles.container}>
      <Visible
        when={state.partStatus === PartStatus.Loaded && !!part}
        FallbackComponent={<Text>{state.partStatus}</Text>}
      >
        <ScreenTitle title={"Part A"} />
      </Visible>
      <Visible
        when={state.partStatus === PartStatus.Loaded && !!part}
      >
        <View style={styles.features}>
          {!part ? null :
            part.features.map((feature, index) => {
              const { controls, name, status } = feature;
              return controls.length > 0 ?
                (
                  doesFeatureFitWithNext(controls.length, mockedFeatures[index + 1]) ?
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <MeasuredFeature
                        name={name}
                        status={status}
                        controls={controls}
                      />
                      <MeasuredFeature
                        name={mockedFeatures[index + 1].name}
                        status={mockedFeatures[index + 1].status}
                        controls={mockedFeatures[index + 1].controls}
                      />
                    </View>
                    : <MeasuredFeature
                      name={name}
                      status={status}
                      controls={controls}
                    />
                ) :
                null
            })
          }
        </View>
      </Visible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  features: {
    flex: 1,
    flexDirection: "row",
    padding: 3,
  }
});