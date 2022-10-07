import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, StatusBar, SafeAreaView } from 'react-native';

function App(){
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const [mostrar, setMostar] = useState(1);

  function entrar(){
    
    if(input === ''){
      alert('Digite o comando');
      return;
    }else if(input === 'html'){
      setText()
    }


    setNome(input);

  }


  return(
   <SafeAreaView style={styles.container}>
    <StatusBar> </StatusBar>
    <View style={{height:40, backgroundColor: 'red'}}></View>
    <Text style={[styles.texto,{opacity: mostrar}]}> Comandos HTML</Text>
    <TextInput
      style={styles.input}
      placeholder="Digite o comando"
      onChangeText={ (texto) => setInput(texto) }
    />

    <Button title="Entrar" onPress={ entrar } />
    <Text style={[styles.subtitulo,{opacity: mostrar}]}> Comandos disponíveis: </Text>
    <Text style={styles.texto}> {nome} </Text>
    <View style={{flex:1, height:80, backgroundColor: 'white'}}></View>
    <View style={{height:40, backgroundColor: 'red'}}></View>
   </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15
  }
});



export default App;