import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import Map from 'maps';
import MapRender from './map';
import SignIn from './js/components/signin';
import {
  StackNavigator,
} from 'react-navigation';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '5%',
    height: 900
  },
  mapstyle: {
    width:'90%',
  },
  nav: {
    backgroundColor: '#cbe6a3',
    fontSize: 20,
    color: 'white',
    width: '100%',
    textAlign:'center',
  },

});

// <Text style={styles.nav}>GeoContract</Text>
//         <MapRender style={styles.container} />  
// <SignIn />  

export default class App extends React.Component {
  render() {

    return (

      
      <View style={styles.container}>
         
        <SignIn />
        <MapRender style={styles.container} />  
      </View>
      
     


    );
  }
}



