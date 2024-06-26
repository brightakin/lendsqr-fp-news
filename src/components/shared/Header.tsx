import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({
  title,
  customStyles,
  navigation,
  colors,
}: any): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <View
        style={[
          styles.flexContainer,
          {alignItems: 'center', gap: heightPercentageToDP(2)},
        ]}>
        <AntDesign
          name="arrowleft"
          size={heightPercentageToDP(2.5)}
          color={colors.text}
        />

        <Text style={[styles.primaryText, {color: colors.text}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: heightPercentageToDP(2.5),
    paddingVertical: heightPercentageToDP(4),
  },
  flexContainer: {
    flexDirection: 'row',
  },
  primaryText: {
    fontSize: heightPercentageToDP(2.5),
    fontFamily: CUSTOMFONT_REGULAR,
  },
  secondaryText: {
    fontSize: heightPercentageToDP(1.2),
    fontFamily: CUSTOMFONT_REGULAR,
  },
});
