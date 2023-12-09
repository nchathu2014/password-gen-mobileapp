import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function PasswordGen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Password Generator</Text>
      <View style={styles.lengthContainer}>
        <Text>Password Length</Text>
        <TextInput style={styles.textInput} placeholder="Ex.8" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  appHeader: {
    textAlign:'center',
    fontSize:25,
    margin:8,
    fontWeight:'bold',
    color:'#000',
  },
  lengthContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
