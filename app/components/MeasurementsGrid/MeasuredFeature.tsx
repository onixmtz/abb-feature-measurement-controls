import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MeasurementStatus from '../../../lib/entities/enums/MeasuredFeatureStatus';
import { IControl } from '../../../lib/entities/interfaces/IControl';
import { MeasuredFeatureTitle } from './MeasuredFeatureTitle';
import { MeasurementsGrid } from './MeasurementsGrid';


export type Props = {
  id: string;
  status: MeasurementStatus;
  controls: IControl[],
  name: string;
}

export const MeasurementStatusEmojis: { [key: number]: string } = {};

MeasurementStatusEmojis[MeasurementStatus.OK] = "✔";
MeasurementStatusEmojis[MeasurementStatus.Warning] = "‼";
MeasurementStatusEmojis[MeasurementStatus.Alarm] = "❌";

export const MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN = 12;

export function MeasuredFeature(props: Props) {
  const { id, controls, name, status } = props;
  if (controls && controls.length < 1) {
    return null;
  }
  const numberOfColumns = Math.round(props.controls.length / MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN) + (controls.length % MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN !== 0 ? 1 : 0);
  let controlColumns: {key: string, controls: IControl[]}[] = [];
  for (let i = 0; i < numberOfColumns; i++) {
    controlColumns.push({ key: `ft${id}ctl${i}`, controls: controls.splice(0, MAX_MEASURED_FEATURES_CONTROLS_PER_COLUMN) });
  }

  return (
    <View style={[styles.container, { flex: numberOfColumns || 1 }]}>
      <MeasuredFeatureTitle status={status}>{name}</MeasuredFeatureTitle>
      <View style={styles.row}>
        {
          controlColumns.map(column => (
            <View style={styles.column} key={column.key}>
              <MeasurementsGrid controls={column.controls} />
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