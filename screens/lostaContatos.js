import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ContactListScreen = ({ navigation, route }) => {
  const { nome } = route.params || {};
  const [contact, setContacts] = useState([]);
  const isFocused = useIsFocused();
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
        
        
    

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Editar usuario', { nome: nome })} // Passar o nome do usuário para a tela do perfil
      >
        <Text style={styles.profileButtonText}>ir para perfil, {nome}</Text>
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
});

export default ContactListScreen;
