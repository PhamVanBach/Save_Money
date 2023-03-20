import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import constants from '../../constants/constants';

export default StyleSheet.create({
  //common
  txtAlignRight: {
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.white,
  },
  snapCarouselWrapper: {
    flex: 0.6,
    width: constants.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snapCarousel: {
    flex: 0.95,
    width: constants.screenWidth * 0.95,
  },
  spendingHistory: {
    flex: 0.4,
    width: constants.screenWidth,
  },
  lastTransacContainer: {
    flex: 1,
  },
  lastTransacHeader: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: constants.screenWidth * 0.06,
    flexDirection: 'row',
  },
  transacHeaderTxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  transacHeaderSeeAll: {
    color: '#34a8538c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lastTransacList: {
    flex: 0.8,
    paddingHorizontal: constants.screenWidth * 0.06,
  },
  transacListWrapItem: {
    width: '100%',
    marginVertical: constants.screenHeight * 0.015,
  },
  transacListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transacListTxt: {
    color: colors.black,
  },
  transacListImgWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34a8538c',
    borderRadius: 15,
  },
  transacListImg: {
    width: '60%',
    height: '60%',
    resizeMode: 'cover',
  },
  transacListInfWrapper: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  listInfItem: {},
  listTitle: {
    fontWeight: 'bold',
  },
  listSubTitle: {
    color: colors.black4,
  },
});
