import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {COLORS} from '../../constants/theme';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
// import {trigger} from 'react-native-haptic-feedback';

// Optional configuration
// const options = {
//   enableVibrateFallback: true,
//   ignoreAndroidSystemSettings: false,
// };

const Button = ({
  colors,
  title,
  loading,
  dark,
  customStyles,
  onPress,
  titleStyles,
}: any): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={() => {
        if (loading) {
          return;
        } else {
          onPress();
          // trigger('impactMedium', options);
        }
      }}
      style={[customStyles]}>
      <LinearGradient
        style={[styles.bgContainer, customStyles]}
        colors={[COLORS.primaryBlue, COLORS.secondaryBlue]}>
        {!loading && (
          <Text
            style={[
              styles.primaryText,
              {color: 'white', fontWeight: '600'},
              titleStyles,
            ]}>
            {title}
          </Text>
        )}
        {loading && <ActivityIndicator size="small" color="white" />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

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
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: heightPercentageToDP(1.2),
    fontFamily: CUSTOMFONT_REGULAR,
    textAlign: 'center',
  },
  bgContainer: {
    paddingHorizontal: heightPercentageToDP(2),
    paddingVertical: heightPercentageToDP(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
