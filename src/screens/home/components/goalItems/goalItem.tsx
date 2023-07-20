/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import * as Progress from 'react-native-progress';
import {IRenderItem} from '../../../../types/renderItemType';
import {constants} from '../../../../constants/constants';
import colors from '../../../../constants/colors';
// type Props = {
//   item: {
//     name: string;
//     id: number;
//     price: number;
//     image: any;
//     esTime: string;
//   };
//   index: number;
// };

const GoalItem: React.FC<IRenderItem> = ({item, index}) => {
  return (
    <View
      style={{
        width: constants.screenWidth * 0.95,
        marginRight: index < 3 ? constants.screenWidth * 0.05 : 0,
        borderRadius: constants.screenWidth * 0.1,
        backgroundColor: item.id % 2 === 0 ? '#34a853' : '#4083f1',
      }}
      key={item.id}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: constants.screenWidth * 0.7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
            marginBottom: 10,
          }}>
          <View
            style={{
              width: 100,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {item.esTime} Goal
            </Text>
          </View>

          <View
            style={{
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: colors.black,
                borderRadius: 20,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginRight: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </View>
            <View>
              <Text>{item.price}</Text>
            </View>
          </View>
        </View>
        <View style={{position: 'relative'}}>
          <Pie
            radius={100}
            innerRadius={85}
            sections={[
              {
                percentage: 30,
                color: 'rgba(255, 255, 255, 0.3',
              },
              {
                percentage: 70,
                color: colors.white,
              },
            ]}
            dividerSize={14}
            strokeCap={'butt'}
            backgroundColor={'rgba(0,0,0,0)'}
          />
          <View style={{position: 'absolute', top: 30, right: 30}}>
            <Image
              source={item.image}
              style={{
                width: 140,
                height: 140,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: 30,
              right: -6,
              backgroundColor: colors.white,
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>160k</Text>
            <Text style={{color: 'black'}}>Left</Text>
          </View>
        </View>
        <View
          style={{
            width: constants.screenWidth * 0.65,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              70% Saved
            </Text>
            <Progress.Bar
              progress={0.7}
              width={constants.screenWidth * 0.15}
              color={colors.white}
              style={{marginLeft: 5}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              30% Left
            </Text>
            <Progress.Bar
              progress={0}
              width={constants.screenWidth * 0.1}
              color={colors.white}
              style={{marginLeft: 5}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoalItem;
