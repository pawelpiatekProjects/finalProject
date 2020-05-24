//-------------------------------
// Root file, all other screens and components are nested in this file
//-------------------------------

// imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/drawer';

export default function App() {
  return (
     <Navigator/>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
