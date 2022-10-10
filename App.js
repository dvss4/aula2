import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';

function App(){
  const [descrição, setDescrição] = useState();
  const [mostrarDesc, setMostrarDesc] = useState('none');
  const [input, setInput] = useState();
  const [mostrar, setMostar] = useState();
  const [imagem, setImagem] = useState();

  function entrar(){
    
    if(input === ''){
      alert('Digite o comando');
      return;
    }
    else if(input === 'Print'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição('Sua função é, basicamente, exibir mensagens na tela ou enviá-las para outro dispositivo, como imprimir dentro de arquivos de texto.')
      setImagem('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuT0SP_DsT7GJawX-2XJk1qLi7OrDO9iXQQCLCKx5FVjzoYfGaDUMjEGeGIgxN5KZCwI&usqp=CAU')
    }

  }


  return(
   <SafeAreaView style={styles.container}>
    <StatusBar> </StatusBar>
    
    <View style={{height:40, backgroundColor: 'blue'}}></View>
    <Text style={[styles.titulo,{opacity: mostrar}]}> Guia de Python</Text>
    <View style={{display:'flex', alignItems:"center"}}>
    <Image style={styles.Imagem} source = {{uri:"https://static.cloud-boxloja.com/lojas/wyfyg/produtos/cf02b27f-ab1b-4a50-ad17-4aa4e0368a94.jpg",}}/></View>
    <TextInput
      style={styles.input}
      placeholder="Digite o comando"
      onChangeText={ (texto) => setInput(texto) }
    />


    <Button title="Pesquisar" onPress={ entrar } />
    <View style={[styles.scroll,{display:mostrar}]}>
    <ScrollView>
    <Text style={styles.texto}> Comandos disponíveis: </Text>
    <Text style={styles.texto}> -Print</Text>
    <Text style={styles.texto}> -Input</Text>
    <Text style={styles.texto}> -While </Text>
    <Text style={styles.texto}> -If/Elif/Else </Text>
    <Text style={styles.texto}> -Elif</Text>
    <Text style={styles.texto}> -Else </Text>
    <Text style={styles.texto}> -For </Text>
    <Text style={styles.texto}> -Atribuição de variável </Text>
    <Text style={styles.texto}> -Listas</Text>
  

    </ScrollView>
    </View>
    <View style={{display:mostrarDesc}}>
    <Text style={styles.txtDescrição}> {descrição} </Text>
    <View style={{display:'flex', alignItems:"center"}}>
    <Image style={styles.ImgDescrição} source = {{uri:imagem,}}/></View>
  </View>
  <View style={{flex:1, height:80, backgroundColor: 'white'}}></View>
    <View style={{backgroundColor:'yellow',height:30}}></View>
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
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15
  },
  texto:{
    textAlign: 'left',
    fontSize: 20,
    marginTop: 10
  },
  Imagem:{
    width: 100,
    height: 100

  },
  ImgDescrição:{
    width: 300,
    height:150,
    margin:10,
  },
  txtDescrição:{
    textAlign: 'justify',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  scroll:{
    height:'50%',
  }
  
});



export default App;