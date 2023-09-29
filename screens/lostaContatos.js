import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ContactListScreen = ({ navigation, route }) => {
  const { email } = route.params || {};
  const [contact, setContacts] = useState([]);
  const isFocused = useIsFocused();

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


  const consultarDados = async () => {
    try {
      const response = await axios.get('http://localhost:3000/contato');
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    consultarDados();
  }, [isFocused]);

  function Logoult() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <View style={styles.container}>
      
        <TouchableOpacity
          style={styles.button1}
          onPress={
            () => {
              navigation.navigate('Login');
              Logoult()
            }
          }>
          <Text style={styles.buttonText}>Logoult</Text>
        </TouchableOpacity>
      

      <Text style={styles.header}>Lista de Contatos
        <hr />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Cadastro de contatos')}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity></Text>
      <FlatList
        data={contact}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity

            style={styles.contactItem}
            onPress={() => navigation.navigate('Editar contatos', { usuario: item })}
          >
            <Text style={styles.contactName}>{item.nome}</Text>
            <Text style={styles.contactPhoneNumber}>{item.telefone}</Text>
            <hr />
          </TouchableOpacity>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333', // Cor do texto
    fontWeight: 'bold', // Negrito
  },
  contactItem: {
    backgroundColor: '#f4f4f4', // Cor de fundo cinza claro
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold', // Negrito
    color: '#333', // Cor do texto
  },
  contactPhoneNumber: {
    fontSize: 14,
    color: '#555', // Cor do texto mais escura
  },
  addButton: {
    backgroundColor: '#3498db', // Cor do botão
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', // Posição absoluta para flutuar sobre a lista de contatos
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff', // Cor do texto no botão
    fontSize: 24,
    fontWeight: 'bold', // Negrito
  },
  button1: {
    backgroundColor: '#f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 120
  },
});

export default ContactListScreen;
