import * as Yup from 'yup';
import moment from 'moment';

const passwordRegex: any =
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';
const phoneRegExp = /^([0]{1})[0-9]{10}$/;

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    )
    .required('Required'),
  referralCode: Yup.string(),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .trim()
    // .matches(
    //   passwordRegex,
    //   'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    // )
    .required('Required'),
});

export const OtpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  otp: Yup.number(),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
});

export const updatePasswordSchema = Yup.object().shape({
  old_password: Yup.string().required('Required'),
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    )
    .required('Required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export const NextOfKinSchema = Yup.object().shape({
  next_of_kin_name: Yup.string()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  next_of_kin_address: Yup.string().required('Required'),
  next_of_kin_email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  next_of_kin_phone_number: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number.')
    .required('Required'),
});

export const UpdateProfileSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'letters are too short!')
    .max(50, 'letters are too long!')
    .required('Required'),
  lastname: Yup.string().required('Required'),
  phone_number: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number.')
    .required('Required'),
  address: Yup.string().required('Required'),
});

export const PasswordResetSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .matches(
      passwordRegex,
      'Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter',
    )
    .required('Required'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});

export const SendCryptoSchema = Yup.object().shape({
  wallet_address: Yup.string().trim().required('Required'),
  amount: Yup.string().trim().required('Required'),
});

export const SendFiatBankSchema = Yup.object().shape({
  select_bank: Yup.string().trim().required('Required'),
  account_number: Yup.string().trim().required('Required'),
  amount_name: Yup.number().required().min(50, 'Must be more than 5'),
});

export const StashPlanSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

export const Tier1Schema = Yup.object().shape({
  // phone: Yup.string().required('Required'),
  bvn: Yup.string().required('Required'),
  accountNumber: Yup.string().required('Required'),
});
