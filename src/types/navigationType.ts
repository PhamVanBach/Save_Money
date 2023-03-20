import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Chart: undefined;
  Goals: undefined;
  Splash: undefined;
  BottomTab: undefined;
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;
