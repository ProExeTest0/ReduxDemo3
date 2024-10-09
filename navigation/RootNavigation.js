import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ShowProduct from '../src/screens/ShowProduct';
import CartItem from '../src/screens/CartItem';
import AddProduct from '../src/screens/AddProduct';
import User from '../src/screens/User';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ShowProduct" component={ShowProduct} />
        <Stack.Screen name="CartItem" component={CartItem} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
