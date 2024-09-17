import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { useSuppliers } from "../context/SuppliersContext";
import { Picker } from "@react-native-picker/picker";
import serverCategorias from "../data/Categories";

const EditarScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState({
    categoria: "",
    nome: "",
    telefone: "",
    cidade: "",
    estado: "",
    email: "",
    senha: "",
    imageUrl: "",
  });

  const { atualizarSupplier, removerSupplier, buscarSupplierPorId } =
    useSuppliers();

  useEffect(() => {
    const item = buscarSupplierPorId(itemId);

    if (item) {
      setItemData({
        ...item,
      });
      console.log("item antes da edição++++", item);
    }
  }, [itemId, buscarSupplierPorId]);

  const handleSave = () => {
    atualizarSupplier(itemData.id, itemData);
    navigation.goBack();
  };

  const handleRemove = () => {
    removerSupplier(itemData.id);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          value={itemData.nome}
          onChangeText={(text) => setItemData({ ...itemData, nome: text })}
          placeholder="Nome"
        />
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          value={itemData.telefone}
          onChangeText={(text) => setItemData({ ...itemData, telefone: text })}
          placeholder="Telefone"
        />
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          value={itemData.cidade}
          onChangeText={(text) => setItemData({ ...itemData, cidade: text })}
          placeholder="Cidade"
        />
        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          value={itemData.estado}
          onChangeText={(text) => setItemData({ ...itemData, estado: text })}
          placeholder="Estado"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, styles.inputBackground]}
          value={itemData.email}
          onChangeText={(text) => setItemData({ ...itemData, email: text })}
          placeholder="Email"
        />
        <View style={styles.viewImage}>
          <Text style={styles.label}>Entre com a url da imagem</Text>
          <TextInput
            style={[styles.input, styles.inputBackground]}
            onChangeText={(text) =>
              setItemData({ ...itemData, imageUrl: text })
            }
            value={itemData.imageUrl}
            placeholder="Insira o URL da imagem"
          />
          {itemData.imageUrl ? (
            <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
          ) : null}
        </View>
        <Button title="Salvar Alterações" onPress={handleSave} />
        <Button title="Remover Item" onPress={handleRemove} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ADD8E6", // Azul claro para o fundo da tela
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  inputBackground: {
    backgroundColor: "#87CEEB", // Azul para inputs
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewImage: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default EditarScreen;
