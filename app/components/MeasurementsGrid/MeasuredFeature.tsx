import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MeasuredFeatureStatus from '../../entities/enums/MeasuredFeatureStatus';
import { IControl } from '../../entities/interfaces/IControl';
import { MeasuredFeatureTitle } from './MeasuredFeatureTitle';
import { MeasurementsGrid } from './MeasurementsGrid';


export type Props = {
  controls: IControl[],
  name: string;
  status: MeasuredFeatureStatus;
}

const getConditionalStyles = (controlsLength: number) => {

  return {
    ...styles.container,
  };
}

export const MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN = 12;

export function MeasuredFeature(props: Props) {
  const { controls, name, status } = props;
  if (controls && controls.length < 1) {
    return null;
  }
  const numberOfColumns = Math.round(props.controls.length / MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN) + (controls.length % MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN !== 0 ? 1 : 0);
  let controlColumns = [];
  for (let i = 0; i < numberOfColumns; i++) {
    controlColumns.push(controls.splice(0, MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN))
  }

  return (
    <View style={[styles.container, { flex: numberOfColumns || 1 }]}>
      <MeasuredFeatureTitle name={name} status={status} />
      <View style={styles.row}>
        {
          controlColumns.map(column => (
            <View style={styles.column}>
              <MeasurementsGrid controls={column} />
            </View>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
});