import {SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import topTabStyles from './topTab.styles';
import LastMonthTab from './lastMonthTab';
import ThisMonthTab from './thisMonthTab';
import FutureTab from './futureTab';
import SegmentTab from './segmentTab';

const Tab = createMaterialTopTabNavigator();
const TopTabScreen = () => {
  return (
    <SafeAreaView style={topTabStyles.container}>
      <Tab.Navigator
        initialRouteName={'This Month'}
        screenOptions={{swipeEnabled: true}}
        tabBar={(props: any) => <SegmentTab {...props} />}>
        <Tab.Screen name={'Last Month'} component={LastMonthTab} />
        <Tab.Screen name={'This Month'} component={ThisMonthTab} />
        <Tab.Screen name={'Future'} component={FutureTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabScreen;
