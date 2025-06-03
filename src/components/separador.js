import { View, StyleSheet } from 'react-native';

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'white',
    opacity: 0.4,
    width: '90%',
    marginTop: 22.5,
    marginBottom: 22.5,
  },
});