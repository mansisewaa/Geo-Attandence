import React from "react";

import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';


const Leave = ({navigation}) => {

   

    return (
     <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.text}> Leave</Text>
       </View> 
    
      
     </SafeAreaView>
  );
};

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
    backgroundColor: '#ecf0f1',
  },
  
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },

  btn : {
      marginTop: 15,
      height: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
});
