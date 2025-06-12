/*zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Botton } from 'react-native';

const Texto=(props)=>{
  const {contenido}=props
  return(
         <Text> {contenido} </Text>
  )
}

/* zona2 : main*/
export default function App() {
  return (
    <View style={styles.container}>
   
      <Texto>hola</Texto>
      <Texto>mundo</Texto>
      <Texto>react native</Texto>
      <Botton title='presioname!'></Botton>
      <StatusBar style="auto" />

    </View>
  );
}


/*     zonas 3 de estilos */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
