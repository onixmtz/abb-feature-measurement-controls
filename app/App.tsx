/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { MainScreen } from './screens/MainScreen';


const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MainScreen />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;