/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {FC} from 'react';
import Lottie from 'lottie-react-native';
import images from '../../constants/images';
type Props = {
  visible: boolean;
};
const LoadingView: FC<Props> = ({visible}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        display: visible ? 'flex' : 'none',
      }}>
      <Lottie
        style={{width: 200, height: 200}}
        source={images.IC_LOADING}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingView;
