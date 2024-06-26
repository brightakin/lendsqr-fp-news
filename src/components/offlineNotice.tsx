import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNetInfo} from '@react-native-community/netinfo';
import {COLORS} from '../constants/theme';

const OfflineNotice: React.FC = () => {
  const netInfo = useNetInfo();

  if (netInfo?.type !== 'unknown' && netInfo?.isInternetReachable === false) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[, {color: 'white'}]}>No internet connection</Text>
      </SafeAreaView>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    backgroundColor: COLORS.paleRed,
    paddingVertical: Platform.OS === 'android' ? 15 : 0,
    paddingHorizontal: 18,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default OfflineNotice;
