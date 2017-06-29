import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Map from 'maps';
import MapRender from './map';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: '5%',
  },
  mapstyle: {
    width:'90%',
  },

});



export default class App extends React.Component {
  render() {

    return (




      <View style={styles.container}>
       
        <Text>GeoContract</Text>
        <MapRender style={styles.container} />
        
      </View>
    );
  }
}



