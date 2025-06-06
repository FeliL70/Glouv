import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Header from '../components/header';
import circuloYLogo from '../../assets/circuloYLogo.png'
import BotonRojo from '../components/botonRojo'
import Separador from '../components/separador';

export default function conectarGlouvScreen() {
  
    const navigation = useNavigation();
    return (
      
      <View style={{backgroundColor: '#272727', flex: 1}}>
         
         
         <Header titulo="Conectar Glouv"/>      

         <View style={styles.conectarGlouvScreen}>
                 <View style={{ height: 25 }} />
                 
                <Image source = {circuloYLogo} style={styles.imagenes}/>
                 <View style={{ height: 50 }} />
                <BotonRojo texto="Conectar Glouv" onPress={() => {}} />

                  <Separador />

                 <Text style={styles.text}>Presiona el botón para que permita activar la 
                  conexión Bluetooth de los guantes. Al presionarlo,
                  el sistema comienza a buscar dispositivos cercanos 
                  para conectarse automáticamente.
                  Una vez conectado podrás entrenar tranquilamente
                  y los datos se registrarán en nuestra aplicación.</Text>

                 </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    conectarGlouvScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    },

    text: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    width: '90%',
  },

   imagenes: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  });
    
