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
import {LOGIN, OAUTH} from '../../navigation/routes';
import analyticsMiddleware from '../../helpers/analytics';
import {COLORS} from '../../constants/theme';

const SignUpScreen = ({navigation}: any): JSX.Element => {
  const [loading, setLoading]: any = useState();
  const {colors, dark}: any = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {isPasswordVisible, Icon, togglePasswordVisibility} =
    useToggleVisibility();

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
              Sign Up
            </Text>
          </View>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              emailAddress: '',
              phoneNo: '',
            }}
            onSubmit={async (values: any, actions: any): Promise<void> => {}}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View
                  style={[
                    {marginTop: heightPercentageToDP(8)},
                    styles.flexContainer,
                  ]}>
                  <CustomInput
                    conduit={''}
                    direction="default"
                    dark={dark}
                    customStyle={[{width: '48%'}]}
                    colors={colors}
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    autoCapitalize="none"
                    keyboardType="default"
                    onBlur={handleBlur('firstName')}
                    touched={touched.firstName}
                    error={errors.firstName}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically={true}
                    placeholderText={'First Name'}></CustomInput>
                  <CustomInput
                    conduit={''}
                    direction="default"
                    dark={dark}
                    customStyle={[{width: '48%'}]}
                    colors={colors}
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    autoCapitalize="none"
                    keyboardType="default"
                    onBlur={handleBlur('lastName')}
                    touched={touched.lastName}
                    error={errors.lastName}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically={true}
                    placeholderText={'Last Name'}></CustomInput>
                </View>
                <View style={[{marginTop: heightPercentageToDP(4)}]}>
                  <CustomInput
                    conduit={''}
                    direction="default"
                    dark={dark}
                    customStyle={[{}]}
                    colors={colors}
                    value={values.phoneNo}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    keyboardType="default"
                    onBlur={handleBlur('password')}
                    touched={touched.phoneNo}
                    error={errors.phoneNo}
                    returnKeyType="next"
                    icon={Icon}
                    enablesReturnKeyAutomatically={true}
                    onPress={togglePasswordVisibility}
                    placeholderText={'Phone Number'}></CustomInput>
                </View>
                <View style={[{marginTop: heightPercentageToDP(4)}]}>
                  <CustomInput
                    conduit={''}
                    direction="default"
                    dark={dark}
                    customStyle={[{}]}
                    colors={colors}
                    value={values.emailAddress}
                    onChangeText={handleChange('Email Address')}
                    autoCapitalize="none"
                    keyboardType="default"
                    onBlur={handleBlur('emailAddress')}
                    touched={touched.emailAddress}
                    error={errors.emailAddress}
                    returnKeyType="next"
                    icon={Icon}
                    enablesReturnKeyAutomatically={true}
                    placeholderText={'Email Address'}></CustomInput>
                </View>
                <Button
                  title="Done"
                  onPress={() => {
                    analyticsMiddleware.logEvent('Signup', {
                      payload: 'Successful',
                    });
                    navigation.navigate(OAUTH);
                  }}
                  loading={loading}
                  customStyles={[
                    {
                      marginTop: heightPercentageToDP(8),
                    },
                  ]}
                />
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
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    fontSize: heightPercentageToDP(1.5),
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
