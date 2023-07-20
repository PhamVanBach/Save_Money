/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import colors from '../../../../constants/colors';
import {constants} from '../../../../constants/constants';
import images from '../../../../constants/images';
type SpendItemProps = {
  id: number;
  title: string;
  subTitle: string;
  price: number;
  image: string;
};

type ItemProps = {
  id: number;
  date: string;
  spendItem: SpendItemProps[];
};

type Props = {
  item: ItemProps;
  index: number;
};

const goalsData = [
  {
    id: 0,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 1,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 2,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 3,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 10,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 11,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 12,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
  {
    id: 13,
    date: '2016-05-02T00:00:00',
    spendItem: [
      {
        id: 0,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 1,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
      {
        id: 2,
        title: 'House',
        subTitle: 'Nov',
        price: 1450,
        image: images.IC_HOUSE,
      },
    ],
  },
];

const ListSpending = () => {
  const renderItem = ({item, index}: Props) => {
    const isLastItem = index === goalsData.length - 1;
    const isFirstItem = index === 1;
    return (
      <View
        key={`LIST_SPENDING_${item.id}`}
        style={{
          height: 200,
          backgroundColor: colors.white,
          width: constants.screenWidth,
          marginTop: isFirstItem ? 30 : 0,
          marginBottom: isLastItem ? 30 : 20,
        }}>
        {item.spendItem.map(spendItem => {
          return (
            <View key={`SPEND_ITEM_${spendItem.id}`}>
              <Text style={{color: colors.black}}>{spendItem.title}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <FlatList
      data={goalsData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListSpending;
