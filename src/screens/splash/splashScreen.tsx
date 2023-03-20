import {View, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import splashStyles from './splash.styles';
import SCREENS from '../../constants/screens';
const SplashView = () => {
  const navigation = useNavigation();
  const [endVideo, setEndVideo] = useState(false);

  function moveToHomeScreen() {
    navigation.navigate(SCREENS.BOTTOMTAB_SCREEN.name as never);
  }

  function onEndVideo() {
    setEndVideo(true);
    moveToHomeScreen();
  }
  useEffect(() => {
    if (endVideo) {
      moveToHomeScreen();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endVideo]);
  return (
    <View style={[splashStyles.splashScreenContainer]}>
      <Animated.View style={splashStyles.container}>
        <Video
          source={require('../../assets/images/vid_splash.mp4')}
          style={[splashStyles.backgroundVideo]}
          paused={false}
          resizeMode="contain"
          onEnd={onEndVideo}
        />
      </Animated.View>
    </View>
  );
};
export default SplashView;
