import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeasuredFeatureStatus from '../../entities/enums/MeasuredFeatureStatus';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';

export type Props = {
  name: string;
  status: MeasuredFeatureStatus;
};

const getConditionalStyle = (status: MeasuredFeatureStatus) => {
  switch (status) {
    case MeasuredFeatureStatus.OK:
      return { backgroundColor: Colors.Green };
    case MeasuredFeatureStatus.Warning:
      return { backgroundColor: Colors.Yellow }
    case MeasuredFeatureStatus.Alarm:
      return { backgroundColor: Colors.Red }
  }
}

export function MeasuredFeatureTitle(props: Props): JSX.Element {
  return (
    <View style={[styles.container, getConditionalStyle(props.status) || {}]}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: Styles.fontSizes.Big,
    letterSpacing: .26,
    color: Colors.White,
    textTransform: "uppercase",
    paddingHorizontal: 12,
  },
});
