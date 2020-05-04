import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Inicio = ({navigation}) => {
  const informacion = {
    clienteId: 20,
    totalPagar: 500,
  };

  const visitarNosotros = () => {
    navigation.navigate('Nosotros', informacion);
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Ir a Nosotros" onPress={() => visitarNosotros()} />
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
