import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/router/router';
import store from './src/redux/store';
import {View,Text} from 'react-native'
export default function App() {
  return (
   
    <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persistor}>
      <Router />
    </PersistGate>
  </Provider>
  );
}
