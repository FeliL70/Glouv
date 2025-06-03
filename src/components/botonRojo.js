import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotonRojo({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#C92828',
    borderRadius: 60,
    height:50,
    width: 332,
    marginBottom: 20,
    justifyContent: 'center', 
  },
  texto: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});