import axios from 'axios';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { showMessage } from "react-native-flash-message";






const Login = ({ navigation }) => {
  const [nome, setNome] = useState([]);
  const [senha, setSenha] = useState([]);


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



  function Login() {
    const auth = getAuth();
  
    signInWithEmailAndPassword(auth, nome, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Lista de contatos');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

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

 
     
    function loginWithGoogle(){
     

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          navigation.navigate('Lista de contatos');
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>Login()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Cadastro de usuarios')}
        >
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>loginWithGoogle()}>
          <Text style={styles.buttonText}>Comece com sua conta com o Google</Text>
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

