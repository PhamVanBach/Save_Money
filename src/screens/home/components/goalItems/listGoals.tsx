import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {constants} from '../../../../constants/constants';
import images from '../../../../constants/images';
import GoalItem from './goalItem';

const ListGoals = () => {
  const goalsData = [
    {id: 0, name: 'PS5', price: 1450, esTime: 'Dec', image: images.IC_GAMEPAD},
    {id: 1, name: 'House', price: 1450, esTime: 'Nov', image: images.IC_HOUSE},
    {id: 2, name: 'Car', price: 1450, esTime: 'Sep', image: images.IC_JEEP},
    {id: 3, name: 'Trip', price: 1450, esTime: 'Jul', image: images.IC_TRIP},
  ];
  //   const flatListRef = useRef();
  return (
    <FlatList
      data={goalsData}
      renderItem={({item, index}) => <GoalItem item={item} index={index} />}
      //   ref={flatListRef}
      snapToInterval={constants.screenWidth}
      disableIntervalMomentum={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListGoals;
