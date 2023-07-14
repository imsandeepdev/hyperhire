import * as React from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import R from '../res/R';

const AppButton = props => {
  return (
    <View
      style={{
        flex: props.flex,
        borderRadius: R.fontSize.Size20,
        backgroundColor: props.backgroundColor ?? R.colors.appColor,
        paddingHorizontal:R.fontSize.Size10,
        paddingVertical:R.fontSize.Size5,
        borderWidth: props.borderWidth,
        marginHorizontal: props.marginHorizontal,
        marginVertical:props.marginVertical
      }}>
      <Pressable
        disabled={props.disabled}
        onPress={props.onPress}
        style={({pressed}) => [
          {
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Text
          style={{
            fontSize: R.fontSize.Size12,
            color: props.textColor ?? R.colors.white,
            fontWeight: '500',
          }}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};
export default AppButton;
