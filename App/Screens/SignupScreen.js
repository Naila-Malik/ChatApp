import firebase from '../Firebase/firebaseConfig';
import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInputComponent from './TextInputComponent';
import ButtonComponent from './ButtonComponent';
import {signUp} from '../Firebase/SignupForm';
import {AddUser} from '../Firebase/users';

export default function SignupScreen({placeholder, updatefields}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpToFirebase = async () => {
    await signUp(email, password)
      .then(res => {
        console.log('res', res);
        var userId = firebase.auth().currentUser.uid;
        // AddUser((name = name), (email = email), (password = password));
      })
      .error(err => {
        Alert.alert('Error', err);
      });
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50%',
        paddingBottom: '100%',
      }}>
      <TextInputComponent
        placeholder="Enter Name"
        updatefields={text => setName(text)}
      />
      <TextInputComponent
        placeholder="Enter Email"
        updatefields={text => setEmail(text)}
      />
      <TextInputComponent
        placeholder="Enter Password"
        updatefields={text => setPassword(text)}
      />
      <ButtonComponent
        title="Sign Up"
        onPress={() => {
          signUpToFirebase();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
