import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import Header from '../components/header';

export default function torneosScreen() {
  
    const navigation = useNavigation();
    return (
       <View style={{backgroundColor: '#272727', flex: 1}}>
         <StatusBar style="light" />
         <Header titulo="Torneos"/>      
         <View style={styles.torneosScreen}>
                 <View style={{ height: 23 }} />
                 <Text style={styles.text}>Torneos</Text>
</View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    torneosScreen: {
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