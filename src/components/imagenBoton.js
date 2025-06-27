import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export default function ImagenBoton({ imagenDeBoton, texto, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: imagenDeBoton }} style={styles.imagen} />
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 345,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  texto: {
    color: 'white',
    fontSize: 18,
    marginTop: 8,
  },
});