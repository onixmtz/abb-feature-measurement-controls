import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeasurementStatus from '../../../lib/entities/enums/MeasuredFeatureStatus';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';


export type Props = {
  children: string;
  status: MeasurementStatus;
};

const getConditionalStyle = (status: MeasurementStatus, alarmState: boolean) => {
  switch (status) {
    case MeasurementStatus.OK:
      return { backgroundColor: Colors.Green };
    case MeasurementStatus.Warning:
      return { backgroundColor: Colors.Yellow }
    case MeasurementStatus.Alarm:
      return { backgroundColor: alarmState ? Colors.Red2 : Colors.Red };
  }
}

export function MeasuredFeatureTitle(props: Props): JSX.Element {
  const { status, children } = props;
  const [alarmState, setAlarmState] = React.useState(false);
  const toggleAlarmState = () => {
    setAlarmState(!alarmState);
  };

  useEffect(() => {
    if (status === MeasurementStatus.Alarm) {
      const timeout = setTimeout(() => toggleAlarmState(), 500);
      return () => clearTimeout(timeout);
    }
  }, [alarmState]);

  return (
    <View style={[styles.container, getConditionalStyle(status, alarmState) || {}]}>
      <Text style={styles.name}>{children}</Text>
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
