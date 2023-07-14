import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import R from '../res/R';


const AppHeader
 = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: R.fontSize.Size50,
        alignItems: 'center',
        paddingHorizontal: R.fontSize.Size2,
        marginHorizontal:R.fontSize.Size10
      }}>
      <Pressable
        onPress={props.onPressLeft}
        style={({pressed}) => [
          {
            height: R.fontSize.Size40,
            width: R.fontSize.Size40,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Image
          source={props.leftSource}
          style={{height: R.fontSize.Size30, width: R.fontSize.Size30}}
          resizeMode={'contain'}
        />
      </Pressable>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: R.colors.black,
            fontSize: R.fontSize.Size18,
            fontWeight: '700',
          }}>
          {props.title}
        </Text>
      </View>
      <Pressable
        onPress={props.onPressRight}
        style={({pressed}) => [
          {
            height: R.fontSize.Size40,
            width: R.fontSize.Size40,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Image
          source={props.rightSource}
          style={{height: R.fontSize.Size30, width: R.fontSize.Size30}}
          resizeMode={'contain'}
        />
      </Pressable>
    </View>
  );
};

export default AppHeader
;
