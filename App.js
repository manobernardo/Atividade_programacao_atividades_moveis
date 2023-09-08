import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import ListaContatos from './screens/lostaContatos';
import CadastroContato from './screens/cadastroContatos';
import EditarContato from './screens/editarContatos';
import CadaastroUsuario from './screens/cadastroUsuario';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lista de contatos" component={ListaContatos} />
        <Stack.Screen name="Cadastro de contatos" component={CadastroContato}
        options={({ navigation }) => ({
          headerTitle: 'Volte para a Lista de contatos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Lista de Contatos')}>
              {/* Aqui está a seta personalizada que leva para OutraPagina */}
              <Text style={{ color: 'blue', marginLeft: 10, fontSize: 40 }}>{'<'}</Text>
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Editar contatos" component={EditarContato}
        options={({ navigation }) => ({
          headerTitle: 'Volte para o Lista de Contatos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Lista de contatos')}>
              {/* Aqui está a seta personalizada que leva para OutraPagina */}
              <Text style={{ color: 'blue', marginLeft: 10, fontSize: 40 }}>{'<'}</Text>
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="Cadastro de usuarios" component={CadaastroUsuario}
        options={({ navigation }) => ({
          headerTitle: 'Volte para o Login',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              {/* Aqui está a seta personalizada que leva para OutraPagina */}
              <Text style={{ color: 'blue', marginLeft: 10, fontSize: 40 }}>{'<'}</Text>
            </TouchableOpacity>
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
