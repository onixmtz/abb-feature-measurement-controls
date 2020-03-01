import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Colors";


type Props = {
  text: string;
};

export default function PartError(props: Props): JSX.Element {
  return <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: 8,
  },
  text: {
    color: Colors.Red2,
    borderWidth: 3,
    borderColor: Colors.Red2,
    borderRadius: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingVertical: 7,
    paddingHorizontal: 40,
    fontSize: 24
  }
});