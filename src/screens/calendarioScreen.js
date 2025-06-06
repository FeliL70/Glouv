import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Header from '../components/header';
import Calendario from '../components/calendario';

export default function calendarioScreen() {
  
  
    const navigation = useNavigation();

    const hoy = new Date();
  const fechaTexto = hoy.toDateString();

    return (


      
       <View style={{backgroundColor: '#272727', flex: 1}}>

          <Header titulo="Calendario"/>  
          
          <View style={styles.calendarioScreen}>

                 <View style={{ height: 23 }} />
                 <Calendario/>
                 <View style={{ height: 46 }} />
                <Text style = {styles.text}>{fechaTexto}</Text>
         </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    calendarioScreen: {
      flex: 1,
      justifyContent: 'flex-start',
    alignContent: 'center',
    paddingHorizontal: 15,
    },

    text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'left',
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  });