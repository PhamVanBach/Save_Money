import React from 'react';
import AppNavigator from './navigation/appNavigator';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
