import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ImagenBoton({ imagenDeBoton, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imagenDeBoton} style={styles.imagen} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imagen: {
    width: 345,
    height: 230,
    resizeMode: 'contain',
  },
});