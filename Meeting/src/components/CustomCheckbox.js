import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomCheckbox = ({ label, initialValue = false, onValueChange }) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View style={styles.checkbox}>
        {isChecked && <MaterialIcons name="check-box" size={24} color="black" />}
        {!isChecked && <MaterialIcons name="check-box-outline-blank" size={24} color="black" />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
