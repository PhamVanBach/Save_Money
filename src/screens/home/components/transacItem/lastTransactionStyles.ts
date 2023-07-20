import {StyleSheet} from 'react-native';
import {constants} from '../../../../constants/constants';
import colors from '../../../../constants/colors';

const lastTransactionStyles = StyleSheet.create({
  placeHolderMedia: {
    width: 40,
    height: 40,
    borderRadius: 22,
    marginRight: constants.screenWidth * 0.06,
    backgroundColor: colors.black2,
  },
});

export default lastTransactionStyles;
