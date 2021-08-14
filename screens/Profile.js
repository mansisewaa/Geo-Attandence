import React, { useState, useEffect } from "react";

import { SafeAreaView, FlatList, TouchableOpacity, TextInput, Button, View, Text, StyleSheet } from "react-native";




const Profile = ({ route }) => {
  
  const [state, setState] = useState({ 
    fname:'', lname: '', birth: '', number: '', Address: '', city: '', started_at: ''})
  
  const [currentDate, setCurrentDate] = useState('');
  
   const { email } = route.params || {};
    const emailTemp = JSON.stringify(email);
    const Email = JSON.parse(emailTemp);
  

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + ':' + month + ':' + year 
    );
  }, []);

 
 

 view =()=> {

     fetch('http://192.168.189.175/api/profile.php', {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content_Type': 'application/json'
        },
        body: JSON.stringify({
            Email: Email,
        })
    }).then ((response) => response.json())
        .then((responseJson) => 
        {
         
          setState({fname:responseJson[0].fname});
          setState({lname:responseJson[0].lname});
          setState({birth:responseJson[0].birth});
          setState({number:responseJson[0].number});
          setState({Address:responseJson[0].Address});
          setState({city:responseJson[0].city});
          setState({started_at:responseJson[0].started_at});
            
        }).catch((error) => {
            console.error(error);
    });
 }
  

  return (
   <SafeAreaView style={{flex:1}}>
       <Text style={styles.text1}>{currentDate}</Text>
      
      <View style={styles.container}>
      <Text style={styles.text}> {email}</Text>

      <Button style={styles.button}
           title="View Profile"
          onPress={this.view}
        />

        <TextInput
         style={styles.tstyle}
         value={state.fname}
        />
        

        <TextInput
         style={styles.tstyle}
         value={state.lname}
        />
        
        <TextInput 
         style={styles.tstyle}
         value={state.birth}
         />
       
        <TextInput
         style={styles.tstyle}
         value={state.number}
         />
       
        <TextInput 
         style={styles.tstyle}
         value={state.Address}
        />
       
        <TextInput 
         style={styles.tstyle}
         value={state.city}
         />
        
        <TextInput 
         style={styles.tstyle}
         value={state.started_at}
         />
        
      

      </View>

    </SafeAreaView>
    );
}   


export default Profile;
const styles = StyleSheet.create({
   
     text1: {
        textAlign: 'center',
        fontSize: 50,
        color: 'black',
      },

      container: {
        flex: 1,
        //justifyContent: "center",
       
        marginTop: 40
      },

      text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
      },

      
      input: {
        marginTop: 5,
        marginBottom: 10,
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 16,
      },
      button: {
        width: 70,
      },
      tstyle:{
        borderBottomWidth:1,
        borderBottomColor: 'black',
        marginBottom:20
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    
 });