import {View} from 'react-native';
import React from 'react';
import ListSpending from './components/listSpending';

const LastMonthTab = () => {
  return (
    <View style={{flex: 1}}>
      <ListSpending />
    </View>
  );
};

export default LastMonthTab;
