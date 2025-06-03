import { View, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header'
import BotonRojo from '../components/botonRojo';

export default function temporizadorScreen() {
  const route = useRoute();
  const { titulo } = route.params;

  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
             
             <StatusBar style="light" />
             <Header titulo={titulo} showBack={true}/>

            <View style={styles.temporizadorScreenScreen}>
              
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
});