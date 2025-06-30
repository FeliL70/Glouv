import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function cronometroScreen() {
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [corriendo, setCorriendo] = useState(false);
  const intervalRef = useRef(null);

  const sonidoRef = useRef(null);

  useEffect(() => {
    const cargarSonido = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sonidoCampa.mp3')
      );
      sonidoRef.current = sound;
    };

    cargarSonido();

    return () => {
      if (sonidoRef.current) {
        sonidoRef.current.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (corriendo && tiempoRestante > 0) {
      intervalRef.current = setInterval(() => {
        setTiempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tiempoRestante === 0) {
      clearInterval(intervalRef.current);
      setCorriendo(false);
      reproducirSonido();
    }

    return () => clearInterval(intervalRef.current);
  }, [corriendo, tiempoRestante]);

  const reproducirSonido = async () => {
    if (sonidoRef.current) {
      await sonidoRef.current.replayAsync();
    }
  };

  const iniciar = () => {
    setTiempoRestante(10);
    setCorriendo(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tiempo}>{tiempoRestante}s</Text>
      <Button title="Iniciar cronómetro" onPress={iniciar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tiempo: {
    fontSize: 48,
    marginBottom: 20,
  },
});