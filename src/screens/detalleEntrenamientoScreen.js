import { View, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../components/header'
import BotonRojo2 from '../components/botonRojo2';

export default function detalleEntrenamientoScreen() {
  const route = useRoute();
  const {imagen, titulo} = route.params;

  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
             
             <Header titulo={titulo} showBack={true}/>

            <View style={styles.detalleEntrenamientoScreen}>
              <View style={{ height: 23 }} />
              <Image source={{uri: imagen}} style={styles.imagen} />
              <View style={{ height: 250 }} />
              <BotonRojo2 texto="Empezar" onPress={() => {}}/>

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