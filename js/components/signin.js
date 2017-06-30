import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  TouchableHighlight,
  View,
  button,              // Container component
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';

import ModalDropdown from 'react-native-modal-dropdown';





const styles2 = StyleSheet.create({
  button: {
    justifyContent: 'center',
    height: (33 + StyleSheet.hairlineWidth),
    backgroundColor:'rgba(102, 195, 219, 0.8)',
    borderRadius:5,
    width: 250,
  },
  buttonText: {
    fontSize: 12
  },
  modal: {
    flexGrow: 1
  },
  dropdown: {
    position: 'absolute',
    height: (33 + StyleSheet.hairlineWidth) * 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 2,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  loading: {
    alignSelf: 'center'
  },
  list: {
    //flexGrow: 1,
  },
  rowText: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    fontSize: 11,
    color: 'gray',
    backgroundColor: 'pink',
    textAlignVertical: 'center'
  },
  highlightedRowText: {
    color: 'black'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray'
  },

});


const DEMO_OPTIONS_1 = ['Electrician', 'Plumber', 'HVAC', 'Moving', 'Dog Walker', 'IT Support', 'Computer Repair', 'Carpentry', 'Cleaning'];

export default class SignIn extends Component {
 
  
  render() {
    return (
      //render this
      
       <View>
      <ModalDropdown options={DEMO_OPTIONS_1} style={[styles2.button]}>
 		
		</ModalDropdown>
		</View>
    )
  }
}

