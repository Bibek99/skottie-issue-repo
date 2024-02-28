/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Skottie} from 'react-native-skottie';

import Home from './animations/home.json';

function App() {
  return (
    <View style={styles.flex1}>
      <View style={styles.container}>
        <Skottie style={styles.flex1} source={Home} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 200,
    width: 200,
    borderWidth: 1,
    backgroundColor: 'red',
  },
});

export default App;
