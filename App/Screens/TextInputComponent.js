import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function TextInputComponent({placeholder, updatefields}) {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={text => updatefields(text)}
        secureTextEntry={placeholder == 'Enter Password' ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    width: '85%',
    backgroundColor: '#ccc',
  },
  textInput: {
    fontSize: 17,
    paddingHorizontal: 10,
    width: '90%',
    paddingVertical: 0,
    color: '#000',
  },
});
