import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {constants} from '../../../constants/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
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
