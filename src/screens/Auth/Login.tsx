import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {SIGNUP} from '../../navigation/routes';
import {GoogleSvg} from '../../../assets/SVGs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {loginUserSuccess} from '../../redux/slices/auth';
import {useAppDispatch} from '../../hooks/reduxHooks';
import analyticsMiddleware from '../../helpers/analytics';
import {COLORS} from '../../constants/theme';
import React from 'react';

const LoginScreen = ({navigation}: any): JSX.Element => {
  const [loading, setLoading]: any = useState();
  const {colors, dark}: any = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useAppDispatch();

  const signIn = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        dispatch(loginUserSuccess(userInfo));
        //analyticsMiddleware.logEvent('Login', {payload: 'Successful'});
      }
    } catch (error) {
      console.log(error);
      analyticsMiddleware.logEvent('Login', {payload: 'Failed'});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[{alignItems: 'center', marginTop: heightPercentageToDP(4)}]}>
          <Text
            style={[
              styles.primaryText,
              {marginTop: heightPercentageToDP(4), color: colors.text},
            ]}>
            Login
          </Text>
        </View>
        <TouchableOpacity
          testID="LoginButton"
          onPress={() => signIn()}
          style={[
            {
              borderColor: colors.text,
              width: heightPercentageToDP(35),
              height: heightPercentageToDP(6),
              borderWidth: 1,
              alignSelf: 'center',
              borderRadius: 20,
              marginTop: heightPercentageToDP(10),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            },
          ]}>
          <View style={{flex: 1}}>
            <GoogleSvg />
          </View>
          <Text style={[styles.secondaryText, {color: colors.text, flex: 3}]}>
            Sign In with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SIGNUP);
          }}>
          <Text
            style={[
              styles.secondaryText,
              {
                color: colors.text,
                fontSize: heightPercentageToDP(1.5),
                flex: 1,
                textAlign: 'center',
                marginTop: heightPercentageToDP(4),
              },
            ]}>
            Don't have an account?<Text> </Text>
            <Text style={{color: COLORS.primaryBlue}}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: heightPercentageToDP(2.5),
    paddingVertical: heightPercentageToDP(4),
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryText: {
    fontSize: heightPercentageToDP(3),
    fontFamily: CUSTOMFONT_REGULAR,
    fontWeight: '700',
  },
  secondaryText: {
    fontSize: heightPercentageToDP(2),
    fontFamily: CUSTOMFONT_REGULAR,
  },
  networkContainer: {
    width: heightPercentageToDP(20),
    height: heightPercentageToDP(3),
    backgroundColor: 'rgba(95, 161, 213, 0.2)',
    alignSelf: 'center',
    marginVertical: heightPercentageToDP(4),
    borderRadius: 50,
  },
});
