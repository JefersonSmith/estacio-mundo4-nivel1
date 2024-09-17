import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SupplierCard = ({ texto, caminhoImagem }) => {
 
  
  return (
 
    <View style={styles.itemContainer}>
      <Image
        style={styles.stretch}
        source={{uri:caminhoImagem}}
        
      />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',  
    alignItems: 'flex-start',  
   
  },
  texto: {
    marginLeft: 20,  
  },
  imagem: {
    width: 50,  
    height: 50, 
    resizeMode: 'contain',  
  },
  stretch: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',

  },
});

export default SupplierCard;
