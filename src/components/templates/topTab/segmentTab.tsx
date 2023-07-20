/* eslint-disable no-sparse-arrays */
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {constants} from '../../../constants/constants';
import colors from '../../../constants/colors';
type Props = {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
};

const SegmentTab: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const inputRange =
    state?.routes?.map((item: any, index: number) => index) || [];

  const translateX = position.interpolate({
    inputRange: inputRange,
    outputRange: [
      constants.screenWidth / 8,
      constants.screenWidth / 7,
      (constants.screenWidth * 2) / 14,
    ],
  });

  const styleTab = [styles.animatedBackground, {transform: [{translateX}]}];

  return (
    <View style={styles.container}>
      <Animated.View />
      {state?.routes?.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        let label = '';
        label = route.name;
        if (options.tabBarLabel !== undefined) label = options.tabBarLabel;
        if (options.title !== undefined) label = options.title;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={`SEGMENT_KEY_${route.name}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabContainer}>
            <Text style={styles.tabText}>{label}</Text>
            {isFocused ? (
              <Animated.View style={[styleTab, styles.dotTab]}>
                <View style={[styles.dotTabInside]} />
              </Animated.View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(SegmentTab);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  animatedBackground: {
    position: 'absolute',
    width: '32.4%',
    height: '90%',
    backgroundColor: colors.white,
    bottom: '-20%',
    left: 0,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  dotTab: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(35, 185, 50, .4)',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotTabInside: {
    width: 4,
    height: 4,
    backgroundColor: 'rgba(35, 185, 50, .8)',
    borderRadius: 3,
  },
  tabText: {color: 'rgba(0, 0, 0, .6)', fontSize: 16, fontWeight: 'bold'},
});
