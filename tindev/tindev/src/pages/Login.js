import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  async function handleLogin() {
    const response = await api.post('devs', {username: user});

    const {_id} = response.data;

    console.log(response);

    navigation.navigate('Main', {_id});
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário do Github"
        placeholderTextColor="#999"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  input: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#DDD',
    borderRadius: 4,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
