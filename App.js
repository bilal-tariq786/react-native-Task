import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AnglesList from './src/screens/AnglesList';
import ProductDetail from './src/screens/ProductDetail';

export default function App() {
  return (
    <NavigationContainer>
      <AnglesList />
    </NavigationContainer>
  );
}
