import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'João', phoneNumber: '123-456-7890' },
    { id: '2', name: 'Maria', phoneNumber: '987-654-3210' },
    // Adicione mais contatos conforme necessário
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Contatos
      <hr />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Cadastro de contatos')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity></Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            
            style={styles.contactItem}
            onPress={() => navigation.navigate('Editar contatos', { contact: item })}
          >
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhoneNumber}>{item.phoneNumber}</Text>
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
