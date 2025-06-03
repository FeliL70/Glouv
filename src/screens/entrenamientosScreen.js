import { View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import {useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header';
import ImagenBoton from '../components/imagenBoton';
import Separador from '../components/separador';

import Imagen1 from '../../assets/I1.png'
import Imagen2 from '../../assets/I2.png'
import Imagen3 from '../../assets/I3.png'
import Imagen4 from '../../assets/I4.png'
import Imagen5 from '../../assets/I5.png'

export default function EntrenamientosScreen(){

    const navigation = useNavigation();
    return (

      
<SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />

 <Header titulo="Entrenamientos"/>         

  <ScrollView>
<View style={styles.entrenamientosScreen}>
      
        <View style={{ height: 23 }} />
          <ImagenBoton imagenDeBoton={Imagen1} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen1,
           titulo: 'Básico',
           })} />
         <Separador />
       
          <ImagenBoton imagenDeBoton={Imagen2} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen2,
           titulo: 'Intermedio',
           })} />
        <Separador />
       
          <ImagenBoton imagenDeBoton={Imagen3} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen3,
           titulo: 'Avanzado',
           })} />
        <Separador />
       
        <Text style={styles.text}>Personalización</Text>
  
          <ImagenBoton imagenDeBoton = {Imagen4} onPress={() => {}} />
        <Separador />      
         
         <ImagenBoton imagenDeBoton={Imagen5} onPress={() => navigation.navigate('temporizador', {
           titulo: 'Temporizador',
           })} />
        <Separador />

</View>
</ScrollView>

      </SafeAreaView>
    );
  }
  
  
const styles = StyleSheet.create({
 safeArea: {
    flex: 1,
    backgroundColor: '#272727',
  },

  entrenamientosScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 27,
    marginTop: 10.5,
    marginBottom: 23,
    marginRight:175
    
  },
  }
);  