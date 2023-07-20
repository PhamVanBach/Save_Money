import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyTabBar from '../components/attoms/tabBar';
import ChartView from '../screens/chart/chartView';
import GoalsView from '../screens/goals/goalsView';
import HomeView from '../screens/home/homeView';
import {MainTabParamList} from './rootStackParams';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator<MainTabParamList>();
  const renderBottomTab = (props: any) => <MyTabBar {...props} />;
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}
      tabBar={renderBottomTab}>
      <Tab.Screen name={'Home'} component={HomeView} />
      <Tab.Screen name={'GOAL'} component={GoalsView} />
      <Tab.Screen name={'CHART'} component={ChartView} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
