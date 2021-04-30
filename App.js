import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { color } from 'react-native-reanimated';


// type Props = {};
export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:''}
    this.calcular = this.calcular.bind(this);
  }

  calcular(){

    let imc = this.state.massa / (this.state.altura*this.state.altura)

    let s = this.state
    s.resultado = imc
    
    // < 16 Magreza severa
    // 16 a < 17 Magreza moderada
    // 17 a < 18,5 Magreza leve
    // 18,5 a < 25 Saudável
    // 25 a < 30 Acima do Peso
    // 30 a < 35 Obesidade I
    // 35 a < 40 Obesidade II
    // > 40 Obesidade III (Mórbida)

    if(s.resultado <16){
      s.resultadoText = 'Magreza severa'
    }
    else if(s.resultado <17){
      s.resultadoText = 'Magreza Moderada'
    }
    else if(s.resultado <18.5){
      s.resultadoText = 'Magreza Leve'
    }
    else if(s.resultado <25){
      s.resultadoText = 'Saudável'
    }
    else if(s.resultado <30){
      s.resultadoText = 'Acima do Peso'
    }
    else if(s.resultado <35){
      s.resultadoText = 'Obesidade I'
    }
    else if(s.resultado <40){
      s.resultadoText = 'Obesidade II'
    }
    else if (s.resultado > 40){
      s.resultadoText = 'Obesidade Mórbida'
    } else {
      s.resultadoText = 'Por favor, corrija os dados e tente novamente'
    }
    this.setState(s)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>IMC</Text>
        <Text style={styles.subtitulo}>Índice de Massa Corporal</Text>
        <View style={styles.entradas}>
          <TextInput placeholder="Peso" placeholderTextColor='lightgray' keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput placeholder="Altura" placeholderTextColor='lightgray' keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={[styles.resultado, {paddingTop:15}]}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:65, color:'#FFFFFF'}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C014E',
    paddingTop: 35
  },
  titulo:{
    fontSize: 55,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  },
  subtitulo:{
    alignSelf: 'center',
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  entradas:{
    flexDirection:'row',
  },
  input:{
    height: 80,
    textAlign: "left",
    alignSelf: 'center',
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    padding: 10,
    color: '#FFFFFF'
  },
  button:{
    backgroundColor:"#FFFFFF"
  },
  buttonText:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    fontWeight:'bold',
    color: '#5C014E'
  },
  resultado:{
    alignSelf:'center',
    textAlign:'center',
    color:'lightgray',
    fontSize: 35,
    padding: 5,
  },

});
