import { View, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header'
import BotonRojo from '../components/botonRojo';

export default function detalleEntrenamientoScreen() {
  const route = useRoute();
  const { imagen, titulo } = route.params;

  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
             
             <StatusBar style="light" />
             <Header titulo={titulo} showBack={true}/>

            <View style={styles.detalleEntrenamientoScreen}>
              <View style={{ height: 23 }} />
              <Image source={imagen} style={styles.imagen} />
              <View style={{ height: 250 }} />
              <BotonRojo texto="Empezar" onPress={() => {}}/>

            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detalleEntrenamientoScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 345,
    height: 230,
    resizeMode: 'contain',
  },
});