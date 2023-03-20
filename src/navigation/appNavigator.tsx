import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SCREENS from '../constants/screens';
import BottomTabs from './bottomTabs';
import SplashView from '../screens/splash/splashScreen';
import HomeView from '../screens/home/homeView';
import ChartView from '../screens/chart/chartView';
import GoalsView from '../screens/goals/goalsView';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
      initialRouteName={SCREENS.SPLASH_SCREEN.name}>
      <Stack.Screen name={SCREENS.SPLASH_SCREEN.name} component={SplashView} />
      <Stack.Screen
        name={SCREENS.BOTTOMTAB_SCREEN.name}
        component={BottomTabs}
      />
      <Stack.Screen
        name={SCREENS.HOME_SCREEN.name}
        component={HomeView}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name={SCREENS.CHART_SCREEN.name}
        component={ChartView}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name={SCREENS.GOALS_SCREEN.name}
        component={GoalsView}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
