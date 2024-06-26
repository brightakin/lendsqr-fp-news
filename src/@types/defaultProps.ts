import {
  TextInputProps as RNCustomTextInput,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from 'react-native';

export interface CustomTextInputProps extends RNCustomTextInput {
  touched?: boolean | any;
  error?: string | any;
  customStyle?: any;
  direction?:
    | 'wallet_address'
    | 'crypto_amount'
    | 'password'
    | 'phone'
    | 'account_number'
    | 'trade_amount'
    | 'default'
    | 'otp';
  icon?: any;
  onPress?: (...args: any) => void;
  email?: string;
  setLoading?: any;
  setOtp?: any;
  children?: React.ReactNode;
  rtlIcon?: JSX.Element;
  viewWrapStyle?: ViewStyle;
  customInputStyle?: TextStyle | ViewStyle;
  conduit: string | any;
  colors: any;
  dark: boolean | any;
  placeholderText: string;
}

export interface SegmentControlProps {
  tabs: Array<string>;
  onChange: (arg0: any) => void;
  currentIndex: number | any;
  segmentedControlBackgroundColor?: string;
  paddingVertical?: number | any;
  activeSegmentBackgroundColor?: string;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  badgeTextStyle?: TextStyle;
  badgeValues?: Array<number | null>;
  inactiveBadgeStyle?: ViewStyle;
  activeBadgeStyle?: ViewStyle;
}
