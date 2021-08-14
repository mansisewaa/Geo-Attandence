import React, { useState } from "react";

import { View,  Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";

import ModalPicker from "../components/ModalPicker";
 
import DateTimePicker from '@react-native-community/datetimepicker';
import FormButton from "../components/FormButton";




const LeaveApply = ({navigation}) => {

  const [name, setname] = useState('');
  const [reason, setreason] = useState('');
  const [period, setperiod] = useState('');
  const status = ('Pending');


  //choose leave
  const [chooseData, setChooseData] = useState('Select Leave..')
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
      setisModalVisible(bool)
  };

  const setData = (option) => {
    <Text style={{fontWeight: 'bold',fontSize: 10}}> {option}</Text>

      setChooseData(option)
  };
  

  //date
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };


  submit = () => {
  fetch("http://192.168.189.175/api/leave.php",
        {
            method:"POST",
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                leavet:chooseData,
                reason:reason,
                period: period,
                date:date,
                status: status
              })
              
        }
      )
      .then((response)=>response.json())
        .then((responseJson)=> {
              if(responseJson === 1 ){
                alert("Updated");
              }
            else {
                alert("Server Error");
              }
            }
      ) 
      .catch((error)=> {
          alert("Error"+error);
        }
      )  
    };





  return(

   <View style={styles.container}>

        <TextInput style={styles.input} 
         placeholder="Name"
         labelValue="name" 
         onChangeText= {(name)=> setname(name)}
         />
        
        <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
            style={styles.input}>
            <Text style={styles.touchableOpacity}>
              {chooseData}
            </Text>
        </TouchableOpacity>

        <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
        >

        <ModalPicker 
        changeModalVisibility={changeModalVisibility}
        setData={setData}
        />

      </Modal>

    <TextInput 
      style={styles.input1} 
        placeholder="Reason"
        labeValue="reason"
        onChangeText= {(reason)=> setreason(reason)}
        multiline={true} 
    />
    <TextInput style={styles.input} 
         placeholder="Period"
         labelValue="period" 
         onChangeText= {(period)=> setperiod(period)}
         />
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
      </View>



     {/* The button that used to trigger the date picker */}
     {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
      
      <FormButton 
        buttonTitle="Apply"
        onPress={this.submit}
      />
      
  </View>
  );
};

export default LeaveApply;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      
      display: 'flex',
      flexDirection: 'column',
      padding:50
   

     
  },
  input1: {
      marginTop: 5,
      marginBottom: 10,
      width: 400,
      height: 80,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 15, 
      fontSize: 16,
  },
  
  input: {
      marginTop: 5,
      marginBottom: 10,
      width: 400,
      height: 50,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 15, 
      fontSize: 16,
  },
  touchableOpacity: {
      backgroundColor: 'white',
      alignSelf: 'stretch',
     // paddingHorizontal: 20,
     
  },
    datePickerStyle: {
      width: 450,
      marginTop: 20,
      padding: 20,
      
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 150,
    },
  text:{
      flex:1,
      justifyContent:'center',
  },
  textStyle: {
      marginTop: 10,
    },
  titleStyle: {
      textAlign: 'center',
      fontSize: 20,
      margin: 20,
    },

    pickedDateContainer: {
      padding: 20,
      backgroundColor: '#eee',
      borderRadius: 10,
    },
    pickedDate: {
      fontSize: 18,
      color: 'black',
    },
    btnContainer: {
      padding: 30,
    },
    // This only works on iOS
    datePicker: {
      width: 320,
      height: 260,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
   
    btn: {
      width: 50,
      height: 50,
      
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
});


