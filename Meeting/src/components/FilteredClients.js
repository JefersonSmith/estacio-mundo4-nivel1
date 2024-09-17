import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { useSuppliers } from '../context/SuppliersContext';
import CustomCheckbox from './CustomCheckbox';

const FilteredClients = () => {
  const { getSuppliersFormatoOriginal, filtrarSuppliers } = useSuppliers();
  const [fornecedores, setSuppliers] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState(false);

  useEffect(() => {
    if (filtroAtivo) {
      const categoriaFiltro = 'esport'; 
      const nomeEmpresaFiltro = 'pesc'; 
      const fornecedoresFiltrados = filtrarSuppliers(categoriaFiltro, nomeEmpresaFiltro);
      setSuppliers(fornecedoresFiltrados);
    } else {
      const fornecedoresIniciais = getSuppliersFormatoOriginal();
      setSuppliers(fornecedoresIniciais);
    }
  }, [filtroAtivo, filtrarSuppliers, getSuppliersFormatoOriginal]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoriaText}>{item.categoria}</Text>
      {item.data.map((cliente, index) => (
        <Text key={index} style={styles.clienteText}>{cliente.nome}</Text>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomCheckbox
        label="Habilitar Filtro"
        initialValue={filtroAtivo}
        onValueChange={(newValue) => setFiltroAtivo(newValue)}
      />
      <FlatList
        data={fornecedores}
        keyExtractor={(item) => item.categoria}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  clienteText: {
    fontSize: 14,
    color: 'black',
  },
  categoriaText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FilteredClients;
