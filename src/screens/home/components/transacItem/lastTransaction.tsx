import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Animated, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Progressive,
} from 'rn-placeholder';
import colors from '../../../../constants/colors';
import {constants, BG_HEADER_HEIGHT} from '../../../../constants/constants';
import images from '../../../../constants/images';
import SCREENS from '../../../../constants/screens';
import {strings} from '../../../../languages/strings';
import homeStyle from '../../home.style';
import TransacItem from './transacItem';
import lastTransactionStyles from './lastTransactionStyles';

const LastTransaction = () => {
  const styles = lastTransactionStyles;
  const navigation = useNavigation();
  const [isLoadMore, setIsLoadMore] = useState(false);
  const transacData = [
    {
      id: 1,
      title: 'House',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'add',
      date: '2016-05-02T00:00:00',
    },
    {
      id: 2,
      title: 'House 1',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'minus',
      date: '2016-05-02T00:00:00',
    },
    {
      id: 3,
      title: 'House 2',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'add',
      date: '2016-05-02T00:00:00',
    },
    {
      id: 4,
      title: 'House 3',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'add',
      date: '2016-05-02T00:00:00',
    },
    {
      id: 5,
      title: 'House 4',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'minus',
      date: '2016-05-02T00:00:00',
    },
    {
      id: 6,
      title: 'House 5',
      subTitle: 'Nov',
      price: 1450,
      image: images.IC_HOUSE,
      type: 'add',
      date: '2016-05-02T00:00:00',
    },
  ];

  const flatListRef = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const mainHeaderOpacity = scrollY.interpolate({
    inputRange: [0, BG_HEADER_HEIGHT / 1.2, BG_HEADER_HEIGHT],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const subHeaderOpacity = scrollY.interpolate({
    inputRange: [0, BG_HEADER_HEIGHT * 0.8, BG_HEADER_HEIGHT * 0.9],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const onTouchSeeAll = () => {
    navigation.navigate(SCREENS.CHART_SCREEN.name as never);
  };

  const fetchTransacData = () => {
    if (transacData.length < 50) {
      setIsLoadMore(true);
      setTimeout(() => {
        setIsLoadMore(false);
      }, 3000);
    }
  };

  const renderPlaceHolderMedia = () => (
    <PlaceholderMedia style={styles.placeHolderMedia} />
  );

  const renderLoading = () => {
    return (
      <>
        {isLoadMore ? (
          <Placeholder
            Animation={Progressive}
            style={{
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: constants.screenWidth * 0.02,
            }}
            Left={renderPlaceHolderMedia}>
            <PlaceholderLine
              style={{
                marginTop: constants.screenHeight * 0.01,
                backgroundColor: colors.black2,
              }}
              width={90}
            />
            <PlaceholderLine
              style={{
                marginTop: constants.screenHeight * 0.01,
                backgroundColor: colors.black2,
              }}
              width={90}
            />
          </Placeholder>
        ) : null}
      </>
    );
  };

  return (
    <View style={homeStyle.lastTransacContainer}>
      <View style={homeStyle.lastTransacHeader}>
        <Text style={homeStyle.transacHeaderTxt}>{strings.lastTransac}</Text>
        <TouchableOpacity onPress={onTouchSeeAll}>
          <Text style={homeStyle.transacHeaderSeeAll}>{strings.seeAll}</Text>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.lastTransacList}>
        <Animated.FlatList
          data={transacData}
          renderItem={({item, index}) => (
            <TransacItem item={item} index={index} />
          )}
          ref={flatListRef}
          disableIntervalMomentum={true}
          onEndReached={fetchTransacData}
          onEndReachedThreshold={0.7}
          ListFooterComponent={renderLoading}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
        />
      </View>
      <Animated.View
        style={{
          height: 50,
          width: constants.screenWidth,
          backgroundColor: 'red',
          opacity: mainHeaderOpacity,
        }}
      />
      <Animated.View
        style={{
          height: 50,
          width: constants.screenWidth,
          backgroundColor: 'red',
          opacity: subHeaderOpacity,
        }}
      />
    </View>
  );
};

export default LastTransaction;
