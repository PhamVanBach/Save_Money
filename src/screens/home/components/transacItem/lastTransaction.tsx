import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import homeStyle from '../../home.style';
import {
  PlaceholderLine,
  PlaceholderMedia,
  Placeholder,
  Progressive,
} from 'rn-placeholder';
import images from '../../../../constants/images';
import TransacItem from './transacItem';
import colors from '../../../../constants/colors';
import constants from '../../../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../../../constants/screens';
import {strings} from '../../../../languages/strings';

const LastTransaction = () => {
  const navigation = useNavigation();
  const [isLoadMore, setIsLoadMore] = useState(false);
  let [transacData, setTransacData] = useState<any>([]);
  useEffect(() => {
    setTransacData([
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'add',
        date: '2016-05-02T00:00:00',
      },
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'minus',
        date: '2016-05-02T00:00:00',
      },
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'add',
        date: '2016-05-02T00:00:00',
      },
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'add',
        date: '2016-05-02T00:00:00',
      },
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'minus',
        date: '2016-05-02T00:00:00',
      },
      {
        id: Math.floor(Math.random() * 100),
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
        type: 'add',
        date: '2016-05-02T00:00:00',
      },
    ]);
  }, []);
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
  const renderLoading = () => {
    return (
      <>
        {isLoadMore ? (
          <Placeholder
            Animation={Progressive}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: constants.screenWidth * 0.02,
            }}
            Left={() => (
              <PlaceholderMedia
                style={[
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    width: 40,
                    height: 40,
                    borderRadius: 22,
                    marginRight: constants.screenWidth * 0.06,
                  },
                  {backgroundColor: colors.black2},
                ]}
              />
            )}>
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
        <FlatList
          data={transacData}
          renderItem={({item, index}) => (
            <TransacItem item={item} index={index} />
          )}
          // ref={flatListRef}
          disableIntervalMomentum={true}
          onEndReached={fetchTransacData}
          onEndReachedThreshold={0.7}
          ListFooterComponent={renderLoading}
        />
      </View>
    </View>
  );
};

export default LastTransaction;
