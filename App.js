import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, LogBox, AppRegistry } from 'react-native';


import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Screens/Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
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
});


