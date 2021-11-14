// Fichier pour la page de Login et de Register
import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View, Image } from 'react-native';

//import styles from "./LogRegScreenStyle";

export default function LogRegScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // sign in or sign up
    const [create, setCreate] = useState(false);



    return (

      <View style={styles.container}>
        <Image style={styles.image} source = {require("../../../assets/Bangoo.png")}/>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={styles.textInput}
          secureTextEntry={true}
        />
        {create ? (
          <>
            <Button title="Sign Up" onPress={() => signUp()} />
            <Text style={styles.text} onPress={() => setCreate(false)}>
              Sign In
            </Text>
          </>
        ) : (
          <>
            <Button title="Sign in" onPress={() => signIn()} />
            <Text style={styles.text} onPress={() => setCreate(true)}>
              Create an Account
            </Text>
          </>
        )}
      </View>
    );
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1-2,

      justifyContent: 'center',
      padding: 20,

    },
    textInput: {
      borderWidth: 1,
      borderColor: 'grey',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    text: {
      color: 'blue',
      marginTop: 20,
    },
  });