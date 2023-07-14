import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import R from '../res/R';

const CustomIconText = props => {
  return (
    <Pressable 
    style={{
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: props.marginHorizontal
        }}>
      <Image
        source={props.icon}
        resizeMode={'contain'}
        style={{
          height: R.fontSize.Size30,
          width: R.fontSize.Size30,
        }}
      />
      {props.text && (
        <Text
          style={{
            fontSize: R.fontSize.Size12,
            fontWeight: '400',
            color: R.colors.textSecColor,
          }}>
          {props.text}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomIconText;


