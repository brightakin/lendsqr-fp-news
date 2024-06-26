import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/shared/Header';
import React from 'react';

const NewsDetailsScreen = ({navigation, route}: any): JSX.Element => {
  const {colors}: any = useTheme();
  const data = route.params.data;

  return (
    <SafeAreaView
      edges={['right', 'left', 'top']}
      style={[styles.container, {backgroundColor: colors.homeBg}]}>
      <Header title={'News Detail'} navigation={navigation} colors={colors} />
      <Text
        style={[
          styles.primaryText,
          {
            color: colors.text,
            fontSize: heightPercentageToDP(2),
            marginTop: heightPercentageToDP(6),
          },
        ]}>
        Author
      </Text>
      <Text
        style={[
          styles.secondaryText,
          {
            color: colors.text,
            fontSize: heightPercentageToDP(2),
            marginTop: heightPercentageToDP(2),
          },
        ]}>
        {data?.author || 'Author not available'}
      </Text>
      <Text
        style={[
          styles.primaryText,
          {
            color: colors.text,
            fontSize: heightPercentageToDP(2),
            marginTop: heightPercentageToDP(8),
          },
        ]}>
        Summary
      </Text>
      <Text
        style={[
          styles.secondaryText,
          {
            color: colors.text,
            fontSize: heightPercentageToDP(2),
            marginTop: heightPercentageToDP(2),
          },
        ]}>
        {data?.content}
      </Text>
    </SafeAreaView>
  );
};

export default NewsDetailsScreen;

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
    fontWeight: 600,
  },
  secondaryText: {
    fontSize: heightPercentageToDP(1.2),
    fontFamily: CUSTOMFONT_REGULAR,
  },
});
