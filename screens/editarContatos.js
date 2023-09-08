import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


  const ContactEditScreen = ({ route }) => {
    const { contact } = route.params;

  const [nome, setNome] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [telefone, setTelefone] = useState(contact.phoneNumber);

  const handleAlterar = () => {
    // Aqui você pode adicionar a lógica para atualizar o contato
    // Substitua o código abaixo pela sua implementação real
    Alert.alert('Contato Alterado', 'O contato foi alterado com sucesso.');
  };

  const handleExcluir = () => {
    // Aqui você pode adicionar a lógica para excluir o contato
    // Substitua o código abaixo pela sua implementação real
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza de que deseja excluir este contato?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Exclusão cancelada'),
        },
        {
          text: 'Excluir',
          onPress: () => {
            Alert.alert('Contato Excluído', 'O contato foi excluído com sucesso.');
            // Lógica de exclusão aqui
          },
        },
      ]
    );
  };

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

      <TouchableOpacity onPress={handleAlterar} style={styles.button}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExcluir} style={styles.buttonExcluir}>
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
