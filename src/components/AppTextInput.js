import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import R from '../res/R';

const AppTextInput = React.forwardRef((props, ref) => {
  return (
    <View
      style={{
        borderRadius: R.fontSize.Size5,
       
      }}>
      <View
        style={{
          height: R.fontSize.Size50,
          backgroundColor: R.colors.white,
          borderRadius: R.fontSize.Size2,
          alignItems: 'center',
          borderTopWidth: 1.3,
          borderColor: R.colors.lightWhite,
        }}>
        <View
          style={{
            paddingLeft: R.fontSize.Size10,
            flexDirection: 'row',
            flex: 1,
            alignItems:'center'
          }}>
            <View style={{marginHorizontal:R.fontSize.Size10}}>
                <Image
                    source={R.image.imageIcon}
                    resizeMode={'contain'}
                />
            </View>
          <View style={{flex: 1}}>
            <TextInput
              ref={ref}
              style={{
                height: '100%',
                fontSize: R.fontSize.Size14,
                letterSpacing: 1,
                fontWeight: '500',
                color: R.colors.textSecColor,
              }}
              placeholder={props.placeholder}
              placeholderTextColor={R.colors.placeholderTextColor}
              maxLength={props.maxLength}
              keyboardType={props.keyboardType ? props.keyboardType : 'default'}
              value={props.value}
              onChangeText={props.onChangeText}
              onFocus={props.onFocus}
              secureTextEntry={props.secureTextEntry}
              returnKeyType={props.returnKeyType}
              onSubmitEditing={props.onSubmitEditing}
            />
          </View>
         
            <Pressable
              onPress={props.rightOnPress}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  paddingHorizontal: R.fontSize.Size6,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text 
              style={{
                fontSize:R.fontSize.Size12,
                color:R.colors.textSecColor,
                fontWeight:'500'
              }}
              >
                {props.buttonText}
              </Text>
            </Pressable>
          
        </View>
      </View>
     
    </View>
  );
});

export default AppTextInput;
