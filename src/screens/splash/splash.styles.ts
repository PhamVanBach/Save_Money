import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {constants} from '../../constants/constants';

export default StyleSheet.create({
  container: {
    width: constants.screenWidth,
    marginRight: constants.screenWidth * 0.22,
    marginTop: constants.screenHeight * 0.09,
  },
  splashScreenContainer: {
    height: constants.screenHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
