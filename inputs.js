import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      firstname:'',
      lastname:'',
      password:''
   }
   handlefName = (text) => {
      this.setState({ firstname: text })
   }
   handlelName = (text) => {
      this.setState({ lastname: text })
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   alert = (firstname, lastname) => {
      alert('FirstName: ' + firstname +'\n'+ 'LastName: ' + lastname)
   }
   render() {
      return (
         <View style = {styles.container}>
           <Text styles = {styles.text}>
             Personal Information
           </Text>
           <Image
              style={{width: 80, height: 80}}
              source={{uri: 'https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg'}}
            />
            <Text styles = {styles.text}>
              First name
            </Text>
            <TextInput style ={styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Test Name"
              placeholderTextColor = "#F2F0F0"
              autoCapitalize = "none"
              onChangeText = {this.handlefName}/>
            <Text styles = {styles.text}>
              Last name
            </Text>
            <TextInput style ={styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Test LastN"
              placeholderTextColor = "#F2F0F0"
              autoCapitalize = "none"
              onChangeText = {this.handlelName}/>
            <Text styles = {styles.text}>
              E-mail
            </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#F2F0F0"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text style = {styles.text}>
              Change password
            </Text>
            <Text style = {styles.text}>
              Old password
            </Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#F2F0F0"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.alert(this.state.firstname, this.state.lastname)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   text:{
     color: 'black'
   },
   input: {
      margin: 15,
      height: 40,
      width: 100,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#F2F0F0',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'black'
   }
})
