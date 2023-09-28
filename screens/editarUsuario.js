import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const UserProfileScreen = ({ route, navigation }) => {
  const { nome } = route.params || {};
  const [userData, setUserData] = useState({}); // Estado para armazenar os dados do usuário

  useEffect(() => {
    // Fazer uma solicitação para buscar os dados do usuário com base no nome
    axios
      .get(`http://localhost:3000/usuario?nome=${nome}`)
      .then(function (response) {
        // Definir os dados do usuário no estado
        setUserData(response.data[0]); // Supondo que o servidor retorna um único usuário com esse nome
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [nome]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo, {nome}</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={userData.nome}
        onChangeText={(text) => setUserData({ ...userData, nome: text })}
      />
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={userData.cpf}
        onChangeText={(text) => setUserData({ ...userData, cpf: text })}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={userData.senha}
        onChangeText={(text) => setUserData({ ...userData, senha: text })}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Implementar a funcionalidade de atualização do perfil aqui
          // Enviar os dados de 'userData' para o servidor
          // Atualizar os dados do usuário no servidor
          // Navegar de volta para a tela de lista de contatos ou outra tela apropriada
        }}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Implementar a funcionalidade de exclusão do perfil aqui
          // Por exemplo, exibir um modal de confirmação
        }}
      >
        <Text style={styles.buttonText}>Excluir Perfil</Text>
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
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
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
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserProfileScreen;
