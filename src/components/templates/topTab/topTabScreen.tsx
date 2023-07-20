import {SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import topTabStyles from './topTab.styles';
import LastMonthTab from './lastMonthTab';
import ThisMonthTab from './thisMonthTab';
import FutureTab from './futureTab';
import SegmentTab from './segmentTab';

type SegmentProps = {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
};

type NewsChildParamList = {
  ThisMonth: SegmentProps;
  LastMonth: undefined;
  Future: undefined;
};

const Tab = createMaterialTopTabNavigator<NewsChildParamList>();
const TopTabScreen = () => {
  const renderTabBar = (props: SegmentProps) => <SegmentTab {...props} />;
  return (
    <SafeAreaView style={topTabStyles.container}>
      <Tab.Navigator
        initialRouteName={'ThisMonth'}
        screenOptions={{swipeEnabled: true}}
        tabBar={renderTabBar}>
        <Tab.Screen name={'LastMonth'} component={LastMonthTab} />
        <Tab.Screen name={'ThisMonth'} component={ThisMonthTab} />
        <Tab.Screen name={'Future'} component={FutureTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabScreen;
