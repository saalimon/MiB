import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text style = {styles.header}>
            {props.header}
         </Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   header: {
      marginTop: 80,
      marginLeft: 100,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20
   }
})
