import analytics from '@react-native-firebase/analytics';

const logEvent = (
  eventName: string,
  params: {[key: string]: any} | undefined,
) => {
  analytics().logEvent(eventName, params);
};

const logScreenChange = (route: any) => {
  analytics().logScreenView({screen_name: route, screen_class: route});
};

const analyticsMiddleware = {
  logEvent: (name: string, action: any): void => {
    logEvent(name, {action: action.type});
  },
  logScreenChange: async (route: any): Promise<void> => {
    logScreenChange(route.routeName);
  },
};

export default analyticsMiddleware;
