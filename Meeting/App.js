import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './src/screens/CadastroScreen';
import ListaScreen from './src/screens/ListaScreen';
import EditarScreen from './src/screens/EditarScreen';
import { SuppliersProvider } from './src/context/SuppliersContext';

const Stack = createNativeStackNavigator();

// Definindo estilos comuns para a barra de navegação
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#4CAF50',  
  },
  headerTintColor: '#fff',  
  headerTitleStyle: {
    fontWeight: 'bold',  
  },
};

function App() {
  return (
    <SuppliersProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
          <Stack.Screen
            name="Lista"
            component={ListaScreen}
            options={{ title: 'Fornecedores' }}  
          />
          <Stack.Screen
            name="Cadastro"
            component={CadastroScreen}
            options={{ title: 'Cadastrar Fornecedor' }}  
          />
          <Stack.Screen
            name="Editar"
            component={EditarScreen}
            options={{ title: 'Editar Fornecedor' }}  
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </SuppliersProvider>
  );
}

export default App;
