import remoteConfig from '@react-native-firebase/remote-config';

const RemoteConfigService = {
  initialize: async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 300,
    });
    await remoteConfig().setDefaults({region: 'World'});
    await remoteConfig().fetchAndActivate();
  },
  getRemoteValue: (key: string) => remoteConfig().getValue(key),
};

export default RemoteConfigService;
