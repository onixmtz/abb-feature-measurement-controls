import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MeasurementsControlsHeadingElement } from './MeasurementsControlsHeadingElement';
import { RowFlexWeight } from './MeasurementsGrid';

export interface Props {
  columnTitles: { label: string, flexWeight?: RowFlexWeight }[];
};

export function MeasurementsControlsHeading(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      {
        props.columnTitles.map(title =>
          <MeasurementsControlsHeadingElement flex={title.flexWeight} title={title.label} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
