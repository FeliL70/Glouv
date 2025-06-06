import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Header from '../components/header';
import BotonRojo2 from '../components/botonRojo2';

export default function perfilScreen() {
  
    const navigation = useNavigation();
    return (
      
      <View style={{backgroundColor: '#272727', flex: 1}}>

         <Header titulo="Perfil"/>    
         <View style={styles.perfilScreen}>  
         
                 <View style={{ height: 23 }} />
                 <Text style={styles.text}>Perfil</Text>
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