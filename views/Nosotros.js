import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Nosotros = ({navigation, route}) => {
  const {clienteId} = route.params;
  const volver = () => {
    // navigation.navigate('Inicio');
    navigation.goBack();
    // navigation.push('Inicio');
  };

  return (
    <View style={styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button title="volver" onPress={() => volver()} />
    </View>
  );
};

export default Nosotros;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
