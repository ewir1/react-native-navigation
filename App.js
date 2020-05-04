/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';

import Inicio from './views/inicio';
import {NavigationContainer} from '@react-navigation/native';
import Nosotros from './views/nosotros';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={({route}) => ({
            title: route.params.clienteId,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}>
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{title: 'Componente Principal'}}
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            // options={{title: 'Sobre Nosotros'}}
            options={({route}) => ({
              title: route.params.clienteId,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F4511E',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
