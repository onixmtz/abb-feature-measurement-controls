import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeasurementStatus from '../../../lib/entities/enums/MeasuredFeatureStatus';
import { IControl } from '../../../lib/entities/interfaces/IControl';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';
import { MeasurementStatusEmojis } from './MeasuredFeature';
import { RowFlexWeight } from './MeasurementsGrid';


export type MeasuredControlProps = IControl & {
  flex?: RowFlexWeight;
};

const measurementStatusColors: { [key: string]: string } = {};

measurementStatusColors[MeasurementStatus.OK] = Colors.Green;
measurementStatusColors[MeasurementStatus.Warning] = Colors.Yellow;
measurementStatusColors[MeasurementStatus.Alarm] = Colors.Red;

const getStatusIconParams = (status: MeasurementStatus): { string: string, color: string } => {
  return { string: MeasurementStatusEmojis[status] || "⁉", color: measurementStatusColors[status] };
}

type ControlStatusProps = {
  status: MeasurementStatus;
};

const ControlStatus = (props: ControlStatusProps) => {
  const { color, string } = getStatusIconParams(props.status);
  return <Text style={[styles.title, styles.icon, { color, borderColor: color }]}>{string}</Text>
}

export function MeasuredControl(props: MeasuredControlProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.wideRow}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.regularRow}>
        <Text style={styles.title}>{props.dev}</Text>
      </View>
      <View style={styles.regularRow}>
        <Text style={styles.title}>{props.devOutTot}</Text>
      </View>
      <View style={styles.narrowRow}>
        <ControlStatus status={props.status} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    flexDirection: "row",
  },
  title: {
    fontSize: Styles.fontSizes.Medium,
    color: Colors.DarkGray,
    textTransform: "capitalize",
    letterSpacing: .4,
    justifyContent: "center",
  },
  icon: {
    borderWidth: 1,
    height: 25,
    width: 25,
    borderRadius: 16,
    textAlign: "center",
    fontSize: 16
  },
  wideRow: {
    paddingLeft: 5,
    flex: 5,
  },
  regularRow: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  narrowRow: {
    flex: 1,
  },
});
