import * as React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { IControl } from '../../entities/interfaces/IControl';
import Colors from '../../utils/Colors';
import { MeasuredControl, MeasuredControlProps } from './MeasuredControl';
import { MeasurementsControlsHeading } from './MeasurementsControlsHeading';


type Props = {
  controls: IControl[];
};


export function MeasurementsGrid(props: Props) {
  const renderItem = (itemInfo: ListRenderItemInfo<MeasuredControlProps>) => <MeasuredControl {...itemInfo.item} />;
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
        <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={props.controls} />
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
    flex: 1,
    backgroundColor: Colors.LightGray2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.DarkGray,
  },
});