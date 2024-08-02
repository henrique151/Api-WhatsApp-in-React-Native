import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WhatsAppScreen from './components/whats';


export default function App() {
  return (
    <View style={styles.container}>
      <WhatsAppScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinha verticalmente ao centro
    alignItems: 'center', // Alinha horizontalmente ao centro
    backgroundColor: '#fff',
  },
});
