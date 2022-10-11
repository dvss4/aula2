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
    else if(input === 'PRINT'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição('Sua função é, basicamente, exibir mensagens na tela ou enviá-las para outro dispositivo, como imprimir dentro de arquivos de texto.')
      setImagem('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuT0SP_DsT7GJawX-2XJk1qLi7OrDO9iXQQCLCKx5FVjzoYfGaDUMjEGeGIgxN5KZCwI&usqp=CAU')
    }
    else if(input === 'INPUT'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("É uma função que permite pedir a um usuário para inserir alguns dados e retorna um referência aos dados na forma de uma string.")
      setImagem('https://miro.medium.com/max/522/1*JNRkBpXQZqjVOocpnkZzvQ.png')
    }
    else if(input === 'WHILE'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("Essa instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. Com ele, a execução das instruções vai continuar até que uma condição seja verdadeira.")
      setImagem('https://i0.wp.com/www.tutorialbrain.com/wp-content/uploads/2020/07/Python-while-continue.png?fit=474%2C390&ssl=1')
    }
    else if(input === 'IF'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("É uma estrutura condicional equivalenet ao 'SE' em português, ela fala que determinado bloco de instruções só vai ser executado se a condição dentro do if for verdadeira")
      setImagem('https://www.hashtagtreinamentos.com/wp-content/uploads/2021/07/Estruturas-Condicionais-no-Python-1.png.webp')
    }
    else if(input === 'ELSE'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("É uma estrutura condicional equivalente ao 'SE NÃO' em português, ele vem depois de um if trazendo um bloco diferente a ser executado, caso as condições do if e do elif forem falsas.")
      setImagem('https://www.simplilearn.com/ice9/free_resources_article_thumb/ifblock-odd.JPG')
    }
    else if(input === 'ELIF'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("É utilizado quando queremos realizar a verificação de outra expressão caso a primeira validação seja falsa")
      setImagem('https://i1.wp.com/blogdoscursos.com.br/wp-content/uploads/2015/05/ifpy.png?resize=289%2C181')
    }
    else if(input === 'FOR'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("É utilizado para percorrer ou iterar sobre uma sequência de dados (seja esse uma lista, uma tupla, uma string), executando um conjunto de instruções em cada item. ")
      setImagem('https://www.tutorialexample.com/wp-content/uploads/2020/09/understand-python-for-else-statement.png')
    }
    else if(input === 'BREAK'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("Essa  instrução oferece a possibilidade de sair de um loop quando uma condição externa é acionada(è colocada dentro de um loop e geralmente após uma instrução condicional). ")
      setImagem('https://pynative.com/wp-content/uploads/2021/06/break-loop-in-python.png')
    }
    else if(input === 'DEF'){
      setMostar('none')
      setMostrarDesc('')
      setDescrição("Essa  instrução é utilizada para criar uma função em python. ")
      setImagem('https://www.guru99.com/images/Pythonnew/Python10.1.png')
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
      onChangeText={ (texto) => setInput(texto.toUpperCase()) }
    />


    <Button title="Pesquisar" onPress={ entrar } />
    <View style={[styles.scroll,{display:mostrar}]}>
    <ScrollView>
    <Text style={styles.texto}> Comandos disponíveis: </Text>
    <Text style={styles.texto}> -Print</Text>
    <Text style={styles.texto}> -Input</Text>
    <Text style={styles.texto}> -While </Text>
    <Text style={styles.texto}> -If</Text>
    <Text style={styles.texto}> -Elif</Text>
    <Text style={styles.texto}> -Else </Text>
    <Text style={styles.texto}> -For </Text>
    <Text style={styles.texto}> -Break</Text>
    <Text style={styles.texto}> -Def</Text>
  

    </ScrollView>
    </View>
    <View style={{display:mostrarDesc}}>
    <Text style={styles.txtDescrição}> {descrição} </Text>
    <View style={{display:'flex', alignItems:"center"}}>
    <Image style={styles.ImgDescrição} source = {{uri:imagem,}} resizeMode="contain"/></View>
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