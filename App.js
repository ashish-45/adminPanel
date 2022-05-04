import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import AddNewProduct from './screens/AddNewProduct';
import AddNewUser from './screens/AddNewUser';
import AdminPage from './screens/AdminPage';

export default function App() {
  return (
    <View style={styles.container}>
      <AddNewProduct/>
      <StatusBar style="auto" />
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
  input:{
    borderWidth: 1,
  }
});
