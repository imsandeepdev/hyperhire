import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import R from '../res/R';

const HeaderCard = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: R.fontSize.Size40,
        marginVertical: R.fontSize.Size10,
        alignItems:'center'
      }}>
      <View
        style={{
          height: R.fontSize.Size30,
          width: R.fontSize.Size30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={props.leftSource}
          style={{height: R.fontSize.Size30, width: R.fontSize.Size30}}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: R.fontSize.Size10,
        }}>
        <Text
          style={{
            color: R.colors.black,
            fontSize: R.fontSize.Size14,
            fontWeight: '700',
          }}>
          {props.title}
        </Text>
       { 
       props.checkIcon && <Image
          source={R.image.checkIcon}
          resizeMode={'contain'}
          style={{
            height: R.fontSize.Size16,
            width: R.fontSize.Size16,
            marginHorizontal: R.fontSize.Size5,
          }}
        />
        }
        <Text
          style={{
            color: R.colors.placeholderTextColor,
            fontSize: R.fontSize.Size14,
            fontWeight: '700',
          }}>
          {props.subtitle}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.rightRource}
      </View>
    </View>
  );
};

export default HeaderCard;
