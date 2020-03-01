import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IControl } from '../../../lib/entities/interfaces/IControl';
import Colors from '../../utils/Colors';
import { MeasuredControl } from './MeasuredControl';
import { MeasurementsControlsHeading } from './MeasurementsControlsHeading';


type Props = {
  controls: IControl[];
};

export function MeasurementsGrid(props: Props) {
  const keyExtractor = (item: IControl) => item.id;
  return (
    <View style={styles.container}>
      <MeasurementsControlsHeading columnTitles={[
        { label: "control", flexWeight: RowFlexWeight.Wide },
        { label: "dev" },
        { label: "dev out tot" },
        { label: "", flexWeight: RowFlexWeight.Narrow },
      ]} />
      {
        props.controls.map(item => <MeasuredControl {...item} key={keyExtractor(item)} />)
      }
    </View>
  );
}

export enum RowFlexWeight {
  Narrow = 1,
  Regular = 3,
  Wide = 5,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LightGray2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.DarkGray,
  },
});
