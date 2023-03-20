import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import homeStyle from '../../home.style';
import {formatDate} from '../../../../utils/formatDateUtil';
import {IRenderItem} from '../../../../types/renderItemType';

const TransacItem: FC<IRenderItem> = ({item}) => {
  return (
    <View style={homeStyle.transacListWrapItem} key={item.id}>
      <View style={homeStyle.transacListItem}>
        <View style={homeStyle.transacListImgWrapper}>
          <Image style={homeStyle.transacListImg} source={item.image} />
        </View>
        <View style={homeStyle.transacListInfWrapper}>
          <View style={homeStyle.listInfItem}>
            <Text style={[homeStyle.transacListTxt, homeStyle.listTitle]}>
              {item.title}
            </Text>
            <Text style={[homeStyle.transacListTxt, homeStyle.listSubTitle]}>
              {item.subTitle}
            </Text>
          </View>
          <View style={homeStyle.listInfItem}>
            <Text
              style={[
                homeStyle.transacListTxt,
                homeStyle.listTitle,
                homeStyle.txtAlignRight,
              ]}>
              {`${item.type === 'add' ? '+' : '-'} ${item.price}`}
            </Text>
            <Text
              style={[
                homeStyle.transacListTxt,
                homeStyle.listSubTitle,
                homeStyle.txtAlignRight,
              ]}>
              {formatDate(item.date)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransacItem;
