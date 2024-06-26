import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {
    fontFamily: CUSTOMFONT_REGULAR,
    color: COLORS.darkGray,
    fontSize: heightPercentageToDP(1.5),
  },
  innerField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    padding: heightPercentageToDP(1),
  },
  inputRTL: {
    flexGrow: 1,
  },
  innerFieldRTL: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(10),
  },
  divider: {
    height: '60%',
    width: 1,
  },
  confirmInput: {
    height: '100%',
    borderWidth: 1,
    width: heightPercentageToDP(0.6),
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default styles;
