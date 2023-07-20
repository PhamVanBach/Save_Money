import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import homeStyle from './home.style';
import ListGoals from './components/goalItems/listGoals';
import LoadingView from '../../components/attoms/loadingView';
import LastTransaction from './components/transacItem/lastTransaction';

const HomeView = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, [visible]);
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.snapCarouselWrapper}>
        <View style={homeStyle.snapCarousel}>
          <ListGoals />
        </View>
      </View>
      <View style={homeStyle.spendingHistory}>
        <LastTransaction />
      </View>
      <LoadingView visible={visible} />
    </View>
  );
};

export default HomeView;
