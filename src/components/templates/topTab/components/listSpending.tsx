/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React, {FC} from 'react';
import images from '../../../../constants/images';
import colors from '../../../../constants/colors';
import constants from '../../../../constants/constants';
type Props = {
  item: {
    id: number;
    name: string;
    spendItem: [
      {
        id: number;
        title: string;
        subTitle: string;
        price: number;
        image: any;
      },
    ];
  };
  index: number;
};

const ListSpending = () => {
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

  const renderItem: FC<Props> = ({item, index}) => {
    const isLastItem = index === goalsData.length - 1;
    const isFirstItem = index === 1;
    return (
      <View
        key={item.id}
        style={{
          height: 200,
          backgroundColor: colors.white,
          width: constants.screenWidth,
          marginTop: isFirstItem ? 30 : 0,
          marginBottom: isLastItem ? 30 : 20,
        }}>
        {item.spendItem.map(spendItem => {
          return (
            <View>
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
      // onScroll={handleScrollList}
    />
  );
};

export default ListSpending;
