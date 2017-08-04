import React, { Component } from 'react';
import {
  StyleSheet,
  Image,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Button,              // Container component
  ScrollView,
  Modal,
  ActivityIndicator,
  TextInput,

} from 'react-native';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';

import ModalDropdown from 'react-native-modal-dropdown';
import Form from 'react-native-form';

const background = require("./background.jpg");
const logo = require("./GeoServices.jpg");


const styles = StyleSheet.create({
   buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginLeft:65,
    width:125,
    height:55,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  logoContainer:{
    width: 170,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 125,
    backgroundColor: '#FFF',
    opacity:.5,
    borderRadius: 20,
  },
  modal: {
    flexGrow: 1
  },
  dropdown: {
    
    height: (10 + StyleSheet.hairlineWidth) * 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    backgroundColor: '#FFF',
    marginTop:15,
    justifyContent: 'center'
  },
  loading: {
    alignSelf: 'center'
  },
  list: {
    //flexGrow: 1,
  },
  
  highlightedRowText: {
    color: 'black'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray'
  },
  background:{
    width:'100%',
    height:'100%'
  },
  inputWrap:{
    flexDirection: "row",
    marginVertical:0,
    marginTop: 15,
    height:40,
    width:250,
    backgroundColor:"transparent"
  },
  buttonWrap:{
    flexDirection: "row",
    marginVertical:0,
    marginTop: 15,
    height:40,
    width: 10,
    backgroundColor:'#FFF'
  },
  input:{
    flex:1,
    paddingHorizontal: 10,
    backgroundColor:'#FFF'
  },
  wrapper:{
    paddingHorizontal: 15,
    paddingVertical:200
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logocontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150
  }

});



 




const DEMO_OPTIONS_1 = ['Electrician', 'Plumber', 'HVAC', 'Moving', 'Dog Walker', 'IT Support', 'Computer Repair', 'Carpentry', 'Cleaning'];


export default class SignIn extends Component {


  
  
  render() {
    return (    
    <Image
      style={[styles.background, styles.container]} 
      source={background}
      resizeMode="cover"
      > 
       <View style={styles.container} />
       <View style={styles.wrapper}> 

             <View>
               <View style={styles.logocontainer}>
                   
                   <Image source={logo}></Image>

                   
               </View>
               <View style={styles.inputWrap}>
                   <TextInput
                     placeholder="Gmail"
                     style={styles.input}
                     underlineColorAndroid="transparent"
                   />
               </View>
               <View style={styles.inputWrap}>
                   <TextInput
                     placeholder="Password"
                     secureTextEntry
                     style={styles.input}
                     underlineColorAndroid="transparent"
                   />
               </View>
               
               
               <View style={styles.buttonContainer}>
                  <Button 
                  color="#FFFFFF"
                  onPress={() => this._handlePress()}
                  title="SignIn"
                  >
                  </Button> 
                </View>
             </View>
       </View>
          
       <View style={styles.container} />
       
    </Image>
    )
  }
  _handlePress(){
    console.log('Pressed SignIn Button!');
  }
}

