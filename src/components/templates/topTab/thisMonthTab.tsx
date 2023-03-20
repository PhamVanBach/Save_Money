import {View} from 'react-native';
import React from 'react';
import ListSpending from './components/listSpending';

const ThisMonthTab = () => {
  return (
    <View style={{flex: 1}}>
      <ListSpending />
    </View>
  );
};

export default ThisMonthTab;
