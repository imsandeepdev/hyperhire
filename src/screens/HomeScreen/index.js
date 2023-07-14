import * as React from 'react';
import {View, SafeAreaView, Text,Image,Pressable,ScrollView} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import R from '../../res/R';
import HeaderCard from '../../components/HeaderCard';
import AppButton from '../../components/AppButton';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import CustomIconText from '../../components/CustomIconText';
import AppTextInput from '../../components/AppTextInput';
const buttonTitle = [
  '#2023',
  '#TODAYISMONDAY',
  '#TOP',
  '#POPS!',
  '#WOW',
  '#ROW',
];
const Banner = [
  {
    id: 1,
    url: 'https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg',
  },
  {
    id: 2,
    url: 'https://m.media-amazon.com/images/I/61T0gpGlYqL._UX569_.jpg',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/originals/d7/09/29/d7092920c7567e43ea7daa43bee8c2a0.jpg',
  },
];


const HomeScreen = () => {

    return (
      <View style={styles.mainView}>
        <SafeAreaView style={styles.mainView}>
          <AppHeader
            leftSource={R.image.backIcon}
            rightSource={R.image.bellIcon}
            title={'자유톡'}
          />
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.topView}>
              <View style={{marginHorizontal: R.fontSize.Size20}}>
                <HeaderCard
                  leftSource={R.image.userIcon}
                  title={'안녕 나 응애'}
                  subtitle={'1일전'}
                  checkIcon={true}
                  rightRource={<AppButton title={'팔로우'} />}
                />
                <View>
                  <Text style={styles.titleText}>
                    {'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'}
                  </Text>
                  <Text style={styles.subTitleText}>
                    {`\n지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~혹시 어떤 상품이 제일 괜찮았어? 
\n후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이제일 재밌었다던데 맞아???              
\n올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가아닌람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!`}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginVertical: R.fontSize.Size5,
                    }}>
                    {buttonTitle.map((item, index) => {
                      return (
                        <AppButton
                          key={index}
                          title={item}
                          marginHorizontal={R.fontSize.Size5}
                          marginVertical={R.fontSize.Size2}
                        />
                      );
                    })}
                  </View>
                </View>
              </View>

              {/* IMAGE */}
              <View style={styles.bannerView}>
                <View style={styles.imageMainView}>
                  <SwiperFlatList
                    autoplay={false}
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                    data={Banner}
                    renderItem={({item}) => (
                      <View style={styles.imageView}>
                        <Image
                          source={{
                            uri: item.url,
                          }}
                          resizeMode={'cover'}
                          style={{height: '100%', width: '100%'}}
                        />
                      </View>
                    )}
                  />
                </View>
                <View style={styles.IconRowView}>
                  <CustomIconText icon={R.image.likeIcon} text={'5'} />
                  <CustomIconText
                    icon={R.image.chatIcon}
                    text={'5'}
                    marginHorizontal={R.fontSize.Size2}
                  />
                  <CustomIconText
                    icon={R.image.bookmarkIcon}
                    marginHorizontal={R.fontSize.Size2}
                  />
                  <CustomIconText icon={R.image.dotIcon} />
                </View>
              </View>

              {/* CHAT PROCESS */}

              <View style={{marginHorizontal: R.fontSize.Size20}}>
                <HeaderCard
                  leftSource={R.image.userIcon}
                  title={'안녕 나 응애'}
                  subtitle={'1일전'}
                  checkIcon={true}
                  rightRource={<Image source={R.image.dotIcon} />}
                />
                <View style={{marginLeft: R.fontSize.Size40}}>
                  <Text style={styles.subTitleText}>
                    {`어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭\n우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도\n 이하도아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다\n괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니\n꼭 봐주세용~!`}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <CustomIconText icon={R.image.likeIcon} text={'5'} />
                    <CustomIconText
                      icon={R.image.chatIcon}
                      text={'5'}
                      marginHorizontal={R.fontSize.Size2}
                    />
                  </View>
                  <HeaderCard
                    leftSource={R.image.user2Icon}
                    title={'ㅇㅅㅇ'}
                    subtitle={'1일전'}
                    rightRource={<Image source={R.image.dotIcon} />}
                  />
                  <View style={{marginLeft: R.fontSize.Size40}}>
                    <Text style={styles.subTitleText}>
                      {`오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다`}
                    </Text>
                    <CustomIconText icon={R.image.likeIcon} text={'5'} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View>
            <AppTextInput value={'댓글을 남겨주세요.'} buttonText={'등록'} />
          </View>
        </SafeAreaView>
      </View>
    );
}

export default HomeScreen