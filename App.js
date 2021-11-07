import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a text field</Text>
      {/* Add one more text field */}
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      {/* Add a button */}
      <Image
        source={require('./assets/favicon.png')}
        />
      {/* Add an image using splash.png */}
      <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      {/* Add another touchable */}

      <TextInput
        style={styles.input}
      />
      {/* Add a text input */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    padding: 10,
  },
});
