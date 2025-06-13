import { View, Text, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';

import Header from '../components/header';
import BotonRojo2 from '../components/botonRojo2';

import 'react-native-url-polyfill/auto'
import 'react-native-get-random-values'
import supabase from '../supabase';

export default function perfilScreen() {
  
    const navigation = useNavigation();

    const [fotoURL, setFotoURL] = useState(null);
  
    useEffect(() => {
      const cargarFoto = async () => {
    console.log({supabase})   
     const {data} = await supabase
          .from('Usuarios')
          .select('fotoDePerfil')
          .eq('id', 1)
          .single();
  
          setFotoURL(data?.fotoDePerfil || null);
      };
  
      cargarFoto();
    }, []);

    return (
      
      <View style={{backgroundColor: '#272727', flex: 1}}>

         <Header titulo="Perfil"/>    
         <View style={styles.perfilScreen}>  
         
                 <View style={{ height: 23 }} />
                 <Text style={styles.text}>Perfil</Text>

                <Image style={{ width: 100, height: 100, borderRadius: 50}}
                  source={{ uri: fotoURL }}/>

                 <View style={{ height: 123 }} />
                 <BotonRojo2 texto="Eliminar mi cuenta" onPress={() => {}}/>
                 </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    perfilScreen: {
     justifyContent: 'center',
     alignItems: 'center',
    },

    text: {
    color: 'white',
    fontSize: 14,
    marginTop: 10.5,
    textAlign: 'center',
  },
  });