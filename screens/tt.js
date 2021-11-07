import React, {Component} from 'react';
import {Text, View , StyleSheet} from 'react-native';

export default class TwitterScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.twitter}>Twitter</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    twitter: {
      color:'blue',
      fontWeight:"500",
      fontSize:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  
  })