import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';

export interface Props {
  title: string;
  style: ViewStyle;
}

export function ScreenTitle(props: Props) {
  return (
    <View style={[styles.container, {...props.style}]}>
      <Text style={styles.name}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingLeft: 10,
    textAlignVertical: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: Styles.fontSizes.Enormous,
    color: Colors.DarkGray,
  },
});