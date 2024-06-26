import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

// Components

import styled from 'styled-components/native';
import moment from 'moment';
import CardView from './CardView';
import {COLORS} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import toDate from '../../helpers/toDate';
import {NEWSDETAILS} from '../../navigation/routes';

const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const GridView = ({item, index, navigation}: any) => {
  const {colors}: any = useTheme();
  const date = toDate(item?.publishedAt);

  return (
    <CardView
      customStyles={[
        {
          marginVertical: heightPercentageToDP(2),
          paddingHorizontal: heightPercentageToDP(2),
        },
      ]}
      colors={colors}>
      <TouchableOpacity
        onPress={(): any => {
          navigation.navigate(NEWSDETAILS, {data: item});
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.textDesc,
            {color: colors.text, fontSize: heightPercentageToDP(2)},
          ]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.imageGrid,
            {position: 'relative', borderRadius: 5, overflow: 'hidden'},
          ]}>
          <Image
            style={[styles.image, {borderRadius: 5}]}
            source={{uri: item?.urlToImage}}
            resizeMode="cover"
          />
        </View>
        <Text
          ellipsizeMode="tail"
          style={[
            styles.textDesc,
            {
              color: colors.text,
              fontSize: heightPercentageToDP(1.2),
              alignSelf: 'flex-end',
            },
          ]}>
          {date}
        </Text>
      </TouchableOpacity>
    </CardView>
  );
};

export default memo(GridView);

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: heightPercentageToDP(18),
    marginHorizontal: heightPercentageToDP(2),
  },
  cardGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 11,
    marginVertical: heightPercentageToDP(2),
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageGrid: {
    width: '100%',
    minHeight: 156,
    marginBottom: 6,
    flex: 1,
    marginTop: heightPercentageToDP(2),
  },
  imageList: {
    width: 72,
    height: 71,
  },
  image: {
    width: heightPercentageToDP(40),
    height: heightPercentageToDP(18),
  },
  textDesc: {
    fontFamily: 'Muli-SemiBold',
    textAlign: 'center',
  },
  textInfo: {
    fontFamily: 'Muli-SemiBold',
  },
  activeHours: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  hoursText: {
    fontFamily: 'Muli-SemiBold',
    textAlign: 'center',
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
