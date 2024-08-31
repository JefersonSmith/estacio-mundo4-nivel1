import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './src/components/PIzzaTranslator';
import ScrollVC from './src/components/ScrollView';
import FlatListBasics from './src/components/FlatListBasics';
import SectionListBasics from './src/components/SectionListBasics';
import DisplayAnImage from './src/components/DIsplayAnImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Section List Basics</Text>
      <StatusBar style="auto" />
      <DisplayAnImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
