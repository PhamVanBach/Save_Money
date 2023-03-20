import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREENS from '../constants/screens';
import HomeView from '../screens/home/homeView';
import GoalsView from '../screens/goals/goalsView';
import ChartView from '../screens/chart/chartView';
import MyTabBar from '../components/attoms/tabBar';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
      })}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name={SCREENS.HOME_SCREEN.name} component={HomeView} />
      <Tab.Screen name={SCREENS.GOALS_SCREEN.name} component={GoalsView} />
      <Tab.Screen name={SCREENS.CHART_SCREEN.name} component={ChartView} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
