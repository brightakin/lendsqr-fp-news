import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import KeyboardAvoidingView from '../../components/shared/KeyboardAvoidingView';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {CUSTOMFONT_REGULAR} from '../../constants/fonts';
import CustomInput from '../../components/CustomInput';
import {SignupSchema} from '../../schemas';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {useToggleVisibility} from '../../hooks/passwordVisibility';
import Button from '../../components/shared/Button';
import {Formik} from 'formik';
import {LOGIN, NEWSLISTING, OAUTH} from '../../navigation/routes';
import {GoogleSvg} from '../../../assets/SVGs';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {loginUserSuccess} from '../../redux/slices/auth';
import analyticsMiddleware from '../../helpers/analytics';
import {COLORS} from '../../constants/theme';
import React from 'react';

const OauthScreen = ({navigation}: any): JSX.Element => {
  const dispatch = useAppDispatch();
  const {colors, dark}: any = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {isPasswordVisible, Icon, togglePasswordVisibility} =
    useToggleVisibility();

  const signIn = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        dispatch(loginUserSuccess(userInfo));
        analyticsMiddleware.logEvent('SignWithOauth', {
          payload: 'Successful',
        });
      }
    } catch (error) {
      analyticsMiddleware.logEvent('SignUpWithOauth', {payload: 'Failed'});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View
            style={[
              {alignItems: 'center', marginTop: heightPercentageToDP(4)},
            ]}>
            <Text
              style={[
                styles.primaryText,
                {marginTop: heightPercentageToDP(4), color: colors.text},
              ]}>
              Create Account
            </Text>
          </View>
          <TouchableOpacity
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
              Sign Up with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(LOGIN);
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
              <Text style={{color: COLORS.primaryBlue}}>Login</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OauthScreen;

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
