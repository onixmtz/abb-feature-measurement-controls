import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import Styles from '../../utils/Styles';

export interface Props {
  title: string;
}

export function ScreenTitle(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.White,
  },
  name: {
    fontWeight: "bold",
    fontSize: Styles.fontSizes.Enormous,
    color: Colors.DarkGray,
  },
});