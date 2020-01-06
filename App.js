import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

export default function App() {
  return (
    <GameEngine style={styles.container}>
      <StatusBar hidden={true} />
    </GameEngine>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
