import axios from 'axios';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyDAVOXCWliiWeylZnuzZq3JjVExtMefV1s",
    authDomain: "manofone-11122.firebaseapp.com",
    projectId: "manofone-11122",
    storageBucket: "manofone-11122.appspot.com",
    messagingSenderId: "569684157113",
    appId: "1:569684157113:web:a3e5dff17bf4c000367168"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  function Cadastrar() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }


  const inserirDados = () => {
    const userData = {
      id: id,
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha
    };

    axios.post('http://localhost:3000/usuario', userData)
      .then(function (response) {
        console.log(response);
        // Se desejar, você pode adicionar aqui um redirecionamento para outra tela
      })
      .catch(function (error) {
        console.log(error);
        // Trate os erros de acordo com sua lógica de aplicação
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={()=>Cadastrar()}>
        <Text style={styles.addButtonText}>Salvar</Text>
      </TouchableOpacity>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  addButtonText: {
    color: '#fff', // Cor do texto no botão
    fontSize: 24,
    fontWeight: 'bold', // Negrito
  },
});

export default SignUpScreen;
