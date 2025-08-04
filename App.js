import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <Text style={styles.tituloPrincipal}>Título Principal</Text>
      <Text>Subtítulo</Text>
      <Text>Este é um paragráfo</Text>
      <Text>Saiba Mais</Text>
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
  tituloPrincipal: {
    fontSize: 50,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  subTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20
  },
  box1: {
   width: "100%",
   height: 80,
   backgroundColor: "#ffdcdc" 
  }



});
