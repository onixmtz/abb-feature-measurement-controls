import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IControl } from '../../entities/interfaces/IControl';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';
import { RowFlexWeight } from './MeasurementsGrid';


export type MeasuredControlProps = IControl & {
  flex?: RowFlexWeight;
};

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
        <Text style={styles.title}>{props.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: Styles.fontSizes.Medium,
    color: Colors.DarkGray,
    textTransform: "capitalize",
    letterSpacing: .4,
    justifyContent: "center",
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
