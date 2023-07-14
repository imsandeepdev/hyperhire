import {Dimensions, StyleSheet} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topView: {
    flex: 1,
    // marginHorizontal: R.fontSize.Size20,
  },
  titleText: {
    fontWeight: '700',
    fontSize: R.fontSize.Size14,
    color: R.colors.black,
  },
  subTitleText: {
    fontWeight: '500',
    fontSize: R.fontSize.Size12,
    color: R.colors.textSecColor,
  },
  bannerView: {
    borderBottomWidth: R.fontSize.Size2,
    borderColor: R.colors.lightWhite,
    paddingVertical: R.fontSize.Size6,
  },
  imageMainView: {
    paddingVertical: R.fontSize.Size6,
  },
  imageView: {
    height: screenHeight / 2.2,
    width: screenWidth,
  },
  IconRowView: {
    marginHorizontal: R.fontSize.Size20,
    flexDirection: 'row',
  },
});

export default styles