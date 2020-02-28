import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';
import { RowFlexWeight } from './MeasurementsGrid';


type Props = {
  title: string;
  flex?: number;
};

export function MeasurementsControlsHeadingElement(props: Props): JSX.Element {
  const { flex, title } = props;
  const textStyle = props.flex === RowFlexWeight.Wide ? { ...styles.title, ...styles.flexStart } : styles.title;

  return (
    <View style={[styles.container, { flex: flex ?? 3 }]}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: Styles.fontSizes.Medium,
    color: Colors.DarkGray,
    textTransform: "capitalize",
    letterSpacing: .4,
    textAlign: "center",
  },
  flexStart: {
    alignSelf: "flex-start",
  }
});
