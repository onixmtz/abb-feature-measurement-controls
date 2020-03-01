import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IMeasuredFeature } from '../../lib/entities/interfaces/IMeasuredFeature';
import IPart from '../../lib/entities/interfaces/IPart';
import PartError from '../components/common/PartError';
import { ScreenTitle } from '../components/common/ScreenTitle';
import Visible from '../components/common/Visible';
import { MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN, MeasuredFeature } from '../components/MeasurementsGrid/MeasuredFeature';
import PartsRepository from '../services/PartsRepository';


function getOtherFittingFeaturesIndexes(controlsLength: number, index: number, features: IMeasuredFeature[]): number[] | undefined {
  if (controlsLength >= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN) {
    return;
  }
  for (let i = index + 1; i < features.length; i++) {
    const testedFeature = features[i];
    if (
      controlsLength <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 6 && testedFeature
      && testedFeature.controls.length <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 6
    ) {
      const testedFeature2 = getOtherFittingFeaturesIndexes(controlsLength + testedFeature.controls.length, i, features);
      if (testedFeature2) {
        return [i, ...testedFeature2];
      }
      return [features.indexOf(testedFeature)];
    } else if (
      controlsLength <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 3 && testedFeature
      && testedFeature.controls.length <= MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN / 3
      ) {
      return [i];
    }
  }
}

enum PartStatus {
  Uninitialized = "not connected",
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
};


type State = {
  partStatus: PartStatus;
  partIds: string[];
  selectedPartId?: string;
  lastRenderCellsHeights?: string;
  part?: IPart;
};

const initialState: State = {
  partStatus: PartStatus.Uninitialized,
  partIds: []
};

const repository = PartsRepository.getInstance();

export function MainScreen() {
  const [state, setState] = useState(initialState);
  const { partStatus, part } = state;

  const setError = useCallback((e: string) => {
    setState({ ...state, partStatus: PartStatus.Error });
  }, [state]);

  const setPart = useCallback((part: IPart) => {
    setState({ ...state, part, partStatus: !!part ? PartStatus.Loaded : PartStatus.Error });
  }, [state]);

  useEffect(() => {
    if (partStatus === PartStatus.Uninitialized) {
      repository.list().then(partsList => {
        setState({ ...state, partStatus: PartStatus.Loading })
        repository.subscribe(
          partsList[0],
          receivedPart => {
            setPart(receivedPart);
          },
          (e) => {
            setError(e);
          }
        );
      }).catch(e => {
        setTimeout(() => setState({ ...state, partStatus: PartStatus.Uninitialized }), 500);
      });
    }
  }, [state]);

  return (
    <View style={styles.container}>
      <Visible
        when={(state.partStatus === PartStatus.Loaded || state.partStatus === PartStatus.Error)}
        FallbackComponent={<Text>{state.partStatus}</Text>}
      >
        <View style={{ flexDirection: "row" }}>
          <ScreenTitle title={(part || { name: "Loading part..." }).name} style={{ flex: 2 }} />
          <Visible when={state.partStatus === PartStatus.Error}>
            <PartError text={"Connection problem"} />
          </Visible>
          <View style={{ flex: 2 }} />
        </View>
      </Visible>
      <Visible
        when={state.partStatus === PartStatus.Loaded || state.partStatus === PartStatus.Error}
      >
        <View style={styles.features}>
          {!part ? null :
            part.features.map((feature, index) => {
              const { controls, name, status, id } = feature;
              if (controls.length < 1) {
                return null;
              }

              const otherFittingFeatures = getOtherFittingFeaturesIndexes(controls.length, index, part.features);

              switch ((otherFittingFeatures || []).length) {
                case 1:
                  const sibling = part.features.splice(otherFittingFeatures[0], 1)[0];
                  return (
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <MeasuredFeature
                        name={name}
                        status={status}
                        controls={controls}
                        id={id}
                      />
                      <MeasuredFeature
                        name={sibling.name}
                        status={sibling.status}
                        controls={sibling.controls}
                        id={sibling.id}
                      />
                    </View>
                  );

                case 2:
                  const sibling1: IMeasuredFeature = part.features.splice(otherFittingFeatures[0], 1)[0];
                  const sibling2: IMeasuredFeature = part.features.splice(otherFittingFeatures[1], 1)[0];
                  return (
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <MeasuredFeature
                        name={name}
                        status={status}
                        controls={controls}
                        id={id}
                      />
                      <MeasuredFeature
                        name={sibling1.name}
                        status={sibling1.status}
                        controls={sibling1.controls}
                        id={sibling1.id}
                      />
                      <MeasuredFeature
                        name={sibling2.name}
                        status={sibling2.status}
                        controls={sibling2.controls}
                        id={sibling2.id}
                      />
                    </View>
                  );
              }

              return <MeasuredFeature
                name={name}
                status={status}
                controls={controls}
                id={id}
              />
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
  },
});
