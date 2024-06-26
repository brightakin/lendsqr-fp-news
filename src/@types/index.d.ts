declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-encrypted-asyncstorage';

declare module 'redux-persist/es/persistStore' {
  import {Store, Action, AnyAction} from 'redux';
  import {PersistorOptions, Persistor} from 'redux-persist/es/types';
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction,
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any,
  ): Persistor;
}

declare module 'redux-persist/lib/persistStore' {
  export * from 'redux-persist/es/persistStore';
  export {default} from 'redux-persist/es/persistStore';
}
declare module 'redux-persist/integration/react';
declare module 'react-native-html-to-pdf';

declare module 'react-native-svg-charts';
