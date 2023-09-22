import axios from 'axios';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const ContactEditScreen = ({ route }) => {
  const { usuario } = route.params || {};
  console.log(route.params.data);
  const [nome, setNome] = useState(usuario?.nome || '');
  const [email, setEmail] = useState(usuario?.email || '');
  const [telefone, setTelefone] = useState(usuario?.telefone || '');

  const alterarDados = () => {

    
    axios
      .put(`http://localhost:3000/contato/${usuario.id}`, {
        
        nome: nome,
        email: email,
        telefone: telefone,
      })
      .then(function (response) {
        console.log(response);
        Alert.alert('Sucesso', 'Dados atualizados com sucesso.');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível atualizar os dados.');
      });
  };

  const excluirDados = () => {

    axios.delete(`http://localhost:3000/contato/${usuario.id}`)
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Contato</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
            <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={alterarDados} style={styles.button}>
        <Text style={styles.buttonText}>Alterar Dados</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={excluirDados} style={styles.buttonExcluir}>
        <Text style={styles.buttonText}>Excluir</Text>
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
  buttonExcluir: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ContactEditScreen;
