import React, { useState } from "react";

import { View,  Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import ModalPicker from "../components/ModalPicker";
 
import DateTimePicker from "@react-native-community/datetimepicker";


const LeaveApply = ({navigation}) => {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();

    setText(fDate)
    console.log(fDate)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }



    const [chooseData, setChooseData] = useState('Select Leave..')
    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {

        setChooseData(option)
    }


   return(
     <View style={styles.container}>
  
          
    </View>
   )


export default LeaveApply;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
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
        padding: 20
        
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
});



<TextInput style={styles.input}  placeholder="Name" 
/>
<TouchableOpacity
onPress={() => changeModalVisibility(true)}
    style={styles.input}>
    <Text style={styles.touchableOpacity}>{chooseData}</Text>
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
    multiline={true} 
/>

<DateTimePicker 
          testId='dateTimePicker'
          value={date}
          mode={mode}
          is24Hours={false}
          display='default'
          onChange={onChange}
        />


        import React, { useState } from "react";

import { View,  Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import ModalPicker from "../components/ModalPicker";
 
import DateTimePicker from '@react-native-community/datetimepicker';


const LeaveApply = () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShowDatePicker] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'android');
        /*  if(event.type == "set") {          //ok button

            setDate(currentDate)
      } else {                                    //cancel Button
          return null
      }*/
      setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();

    setText(fDate)
    console.log(fDate)
  }

  const showMode = (currentMode) => {
    setShowDatePicker(true);
    setMode(currentMode);
  }



    /*const [chooseData, setChooseData] = useState('Select Leave..')
    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {

        setChooseData(option)
    }*/


  return(

    <View style={styles.container}>
       <Text style={{fontWeight: 'bold',fontSize: 10}}> {text}</Text>
      <View style={{margin:20 }}>
        <Button
          title='DatePicker' 
          onPress={() => showMode('date')}
        />

      </View>
      {show && (
        <DateTimePicker
        testId ='dateTimePicker'
        value={date}
        mode={'mode'}
        is24Hour={true}
        display="default"
        onChange={({nativeEvent}) => {
          setShowDatePicker(false);
        }}
        />
      )}
      
      

        

    </View>
  );

}

export default LeaveApply;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
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
      padding: 20
      
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
});