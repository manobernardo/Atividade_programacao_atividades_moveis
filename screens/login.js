import axios from 'axios';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import  {  showMessage ,  hideMessage  } from "react-native-flash-message";


import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({ navigation }) => {
  const [nome, setNome] = useState([]);
  const [senha, setSenha] = useState([]);

  const handleLogin = async () => {
    axios.get('http://localhost:3000/usuario?nome=' + nome + '&senha=' + senha)
      .then(function (response) {
        if (response.data.length === 0) {
          showMessage({
            message: "Email ou Senha inválido, verifique os dados!",
            type: "info",
          });
        } else {
          navigation.navigate('Lista de contatos', { nome: nome }); // Passar o nome do usuário para a próxima tela
          showMessage({
            message: "Seja bem-vindo",
            type: "success",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Cadastro de usuarios')}
        >
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10, // Adiciona um espaço entre os botões

  },
  button1: {
    backgroundColor: '#f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default Login;

