import axios from 'axios';
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
  
      // Faça a requisição de login aqui
      const response = await axios.post('http://localhost:3000/usuario/login', {
        nome: nome,
        senha: senha,
        
      });

      // Verifique se a resposta indica que as credenciais estão corretas (você deve definir a lógica da sua API)
      if (response.data.authenticated) {
        navigation.navigate('Lista de contatos');
        console.log(response.data) // Navegue para a tela de contatos se as credenciais estiverem corretas
      } else {
        // Caso contrário, mostre uma mensagem de erro
        alert('Credenciais incorretas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

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

