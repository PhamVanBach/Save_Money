import {Dimensions} from 'react-native';

const BG_HEADER_WIDTH = Dimensions.get('screen').width;
const BG_HEADER_HEIGHT = (BG_HEADER_WIDTH * 292) / 375;

const constants = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

export {constants, BG_HEADER_HEIGHT, BG_HEADER_WIDTH};
