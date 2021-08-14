 import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const login = ({navigation}) => {

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState();
     var [loginstatus, setlogin] = useState('');
   
     const[ state, setState ] = useState({
        Email2:Email,
    });
   

    userLogin = () => {

        fetch('http://192.168.189.175/api/auth_api.php', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content_Type': 'application/json'
            },
            body: JSON.stringify({
                Email: Email,
                password: password
            })
        }).then ((response) => response.json())
            .then((responseJson) => {
                if(responseJson === 1){
                    
                    
            
                    loginstatus = 1;
                    if( loginstatus == 1){
                        navigation.navigate('Home', { email:Email }, {key: 'Home'});
                    }
                    return state
                    
                 }
                else {
                    alert("Login Failed");
                }
            }).catch((error) => {
                console.error(error);
            });
    }
    
    return(
         <View style={styles.container}>
             <View style={styles.header}>
               <Text style={styles.text}>Welcome!</Text>
             </View>
            
            <View style={styles.footer}>
                <FormInput
                    labelValue={Email}
                    placeholderText="Email"
                    onChangeText= {(Email)=> setEmail(Email)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={password}
                    placeholderText="Password"
                    onChangeText= {(password)=> setPassword(password)}
                    secureTextEntry={true}
                    
                />

                <FormButton 
                    buttonTitle="Login"
                    onPress={this.userLogin}
                 />
            </View>

        </View>
    );

};
export default login;

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#009387",
        flex: 1,
       // alignItems: 'center',
       // justifyContent: 'center',
       // padding: 20,

    },
    text: {
        fontFamily: 'Kufan-SemiBoldItalic',
        fontSize: 40,
        fontWeight:'bold',
        marginBottom: 10,
        color: "white",
        elevation:5,
        padding:20,
        alignItems:'center'
    },
    navButton: {
        marginTop: 15,
    },

    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
      header:{
          flex:1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
      footer:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical: 30,
        paddingHorizontal:20
      },


});
