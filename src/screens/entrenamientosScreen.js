import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation } from '@react-navigation/native'

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

      
<View style={{flex: 1, backgroundColor: '#272727',}}>
       
 <Header titulo="Entrenamientos"/>         

  <ScrollView>
<View style={styles.entrenamientosScreen}>
      
        <View style={{ height: 25 }} />
          <ImagenBoton imagenDeBoton={Imagen1} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen1,
           titulo: 'Básico',
           })} />
         <Separador colorS="white" mB= {22.5} mT= {22.5}/>
       
          <ImagenBoton imagenDeBoton={Imagen2} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen2,
           titulo: 'Intermedio',
           })} />
        <Separador colorS="white" mB= {22.5} mT= {22.5}/>
       
          <ImagenBoton imagenDeBoton={Imagen3} onPress={() => navigation.navigate('detalleEntrenamiento', {
          imagen: Imagen3,
           titulo: 'Avanzado',
           })} />
        <Separador colorS="white" mB= {22.5} mT= {22.5}/>
       
        <Text style={styles.text}>Personalización</Text>
  
          <ImagenBoton imagenDeBoton = {Imagen4} onPress={() => {}} />
        <Separador colorS="white" mB= {22.5} mT= {22.5}/>      
         
         <ImagenBoton imagenDeBoton={Imagen5} onPress={() => navigation.navigate('temporizador', {
           titulo: 'Temporizador',
           })} />
        <Separador colorS="white" mB= {22.5} mT= {22.5}/>

</View>
</ScrollView>

      </View>
    );
  }
  
  
const styles = StyleSheet.create({

  entrenamientosScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 10.5,
    marginBottom: 23,
    marginRight:175,
    fontWeight: 'bold',
    
  },
  }
);  