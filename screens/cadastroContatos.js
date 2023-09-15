import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ContactFormScreen = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function inserirDados(){

    const userData = {
      id: id,
      nome: nome,
      email: email,
      telefone: telefone
    };

    axios.post('http://localhost:3000/contato', userData)
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }
    

  const handleSalvar = () => {
    // Aqui você pode adicionar a lógica para salvar o contato
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.header}>Cadastro de Contato</Text>
      
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TouchableOpacity onPress={inserirDados} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
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
});

export default ContactFormScreen;
