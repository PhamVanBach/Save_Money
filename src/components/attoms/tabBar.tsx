/* eslint-disable react-native/no-inline-styles */
import {View, Image, Pressable} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import SCREENS from '../../constants/screens';
import colors from '../../constants/colors';
type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};
const MyTabBar: React.FC<Props> = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName = images.IC_HOME;
        switch (route.name) {
          case SCREENS.HOME_SCREEN.name:
            iconName = images.IC_HOME;
            break;
          case SCREENS.GOALS_SCREEN.name:
            iconName = images.IC_PLUS_APP;
            break;
          case SCREENS.CHART_SCREEN.name:
            iconName = images.IC_CHART_PIE;
            break;
        }

        return (
          <Pressable
            key={`ROUTE_KEY_${route.name}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.black,
              padding: 20,
            }}>
            <Image
              source={iconName}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                tintColor: isFocused ? colors.primary : colors.white,
              }}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;
