import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Routers/>
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
};

export default App;
