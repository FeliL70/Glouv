import { View, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header'
import BotonRojo2 from '../components/botonRojo2';

export default function temporizadorScreen() {
  const route = useRoute();
  const { titulo } = route.params;

  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
             
             <StatusBar style="light" />
             <Header titulo={titulo} showBack={true}/>

            <View style={styles.temporizadorScreen}>
            <View style={{ height: 250 }} />
              <BotonRojo2 texto="Empezar" onPress={() => {}}/>

            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  temporizadorScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});