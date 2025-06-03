import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header';

export default function calendarioScreen() {
  
    const navigation = useNavigation();
    return (

       <View style={{backgroundColor: '#272727', flex: 1}}>
         <StatusBar style="light" />
          <Header titulo="Calendario"/>  
          <View style={styles.calendarioScreen}>

                 <View style={{ height: 23 }} />
                 <Text style={styles.text}>Calendario</Text>
           
         </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    calendarioScreen: {
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