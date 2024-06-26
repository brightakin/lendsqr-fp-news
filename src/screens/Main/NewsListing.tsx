import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import {COLORS} from '../../constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {authentication} from '../../redux/slices/auth';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {useEffect, useState} from 'react';
import {getNews} from '../../redux/actions/newsActions';
import {useSelector} from 'react-redux';
import GridView from '../../components/shared/GridView';
import CardView from '../../components/shared/CardView';
import Button from '../../components/shared/Button';
import analyticsMiddleware from '../../helpers/analytics';
import RemoteConfigService from '../../helpers/remoteConfigService';
import React from 'react';

const NewsListingScreen = ({navigation}: any): JSX.Element => {
  const data = useAppSelector(authentication)?.user?.user;
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(state => state.newsList);
  const {loading, error, newsData} = newsList;
  const {colors}: any = useTheme();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refreshHandler = async (): Promise<void> => {
    try {
      setIsRefreshing(true);
      await dispatch(getNews());
      RemoteConfigService.initialize();
      const regionConfig =
        RemoteConfigService.getRemoteValue('region')?.asString();
    } catch (err) {
      analyticsMiddleware.logEvent('Error fetching news', {
        payload: 'Failed',
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const throwError = () => {
    analyticsMiddleware.logEvent('ThrowError', {payload: 'Failed'});
    throw new Error('This is a runtime error');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getNews());
      } catch (err) {
        analyticsMiddleware.logEvent('ErrorFetchingNews', {
          payload: 'Failed',
        });
      }
    };

    fetchData();
  }, [dispatch]);

  const emptyComponent: React.FC = () => (
    <CardView
      colors={colors}
      customStyle={[
        styles.noDisplay,
        {
          marginHorizontal: heightPercentageToDP(2),
          borderRadius: 10,
        },
      ]}>
      <Text style={[{color: colors, fontSize: heightPercentageToDP(3)}]}>
        No Data Found
      </Text>
    </CardView>
  );

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView
      edges={['right', 'left', 'top']}
      style={[styles.container, {backgroundColor: colors.homeBg}]}>
      <View style={[styles.flexContainer, {justifyContent: 'space-between'}]}>
        <View
          style={[
            styles.flexContainer,
            {gap: heightPercentageToDP(0.5), alignItems: 'center'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              // launchCamera({mediaType: 'photo'});
            }}>
            <View
              style={{
                height: heightPercentageToDP(6),
                width: heightPercentageToDP(6),
                borderRadius: 50,
                backgroundColor: COLORS.primaryBlue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.primaryText,
                  {color: 'white', fontSize: heightPercentageToDP(2)},
                ]}>
                {data?.familyName?.slice(0, 1)?.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={[styles.primaryText, {color: colors.text}]}>
              Hi {data?.familyName}! 🙌
            </Text>
          </View>
        </View>
        <Button
          title={'Error'}
          customStyles={[
            {width: heightPercentageToDP(10), height: heightPercentageToDP(6)},
          ]}
          titleStyles={[{fontSize: heightPercentageToDP(1.8)}]}
          onPress={throwError}
          testID="error-button"
        />
      </View>
      <FlatList
        data={newsData}
        extraData={newsData}
        horizontal={false}
        keyExtractor={(item: any, idx: {toString: () => any}): any =>
          item + idx.toString()
        }
        onRefresh={refreshHandler}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        refreshing={isRefreshing}
        removeClippedSubviews={true}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={100}
        windowSize={7}
        renderItem={({item, index}: any): any => {
          return (
            <GridView
              colors={colors}
              item={item}
              index={index}
              navigation={navigation}
              testID="news-item"
            />
          );
        }}
        progressViewOffset={20}
        key={1}
        numColumns={1}
        ListEmptyComponent={emptyComponent}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingBottom: 100,
        }}
        testID="news-list"
      />
    </SafeAreaView>
  );
};

export default NewsListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: heightPercentageToDP(2.5),
    paddingTop: heightPercentageToDP(4),
  },
  flexContainer: {
    flexDirection: 'row',
  },
  noDisplay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    height: 90,
  },
  primaryText: {
    fontSize: heightPercentageToDP(1.9),
    fontFamily: CUSTOMFONT_REGULAR,
  },
  secondaryText: {
    fontSize: heightPercentageToDP(1.2),
    fontFamily: CUSTOMFONT_REGULAR,
  },
});
