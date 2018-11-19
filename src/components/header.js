import React from 'react';
import { View,Text } from 'react-native';

const Header = () => {
  const {container,headerStyle,elementsContainer } = styles;
  return(
      <View style ={[{flex: 1}]}>
        <View style={{flex:1 ,backgroundColor:'#EE2C48'}}/>
        <View style={{flex:4 ,backgroundColor:'#FAA030'}}/>
        <View style={{flex:1 ,backgroundColor:'#32B76C'}}/>
      </View>
  );
};
const styles = {
    container:{
      marginTop:48,
      flex:1
    },
    headerStyle:{
      fontSize:36,
      textAlign:'center',
      fontWeight:'100',
      marginBottom:24
    },
    elementsContainer:{
      backgroundColor:'#ecf5fd',
      marginLeft:24,
      marginRight:24,
      marginBottom:24
    }
};
export default Header;
