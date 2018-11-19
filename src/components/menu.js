import React from 'react';
import { View,Text } from 'react-native';

const Menu = () => {
  const { viewStyle } = styles;
  return(
    <View style = {viewStyle}>
    </View>
  );
};
// make style of bottom Menu
const styles ={
  viewStyle:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{ width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    positive:'relative'
  }
};
export default Menu;
