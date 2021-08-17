import React,  {useEffect, useState}  from "react";

import { StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Platform,
    PermissionsAndroid,
    SafeAreaView,
  } from "react-native";
import useBackgroundGeolocationTracker from "../useBgTracking";
import * as geolib from 'geolib';





const Home = ({ route, navigation}) => {



    const { email } = route.params || {};
    const emailTemp = JSON.stringify(email);
    const Email = JSON.parse(emailTemp);
    //console.warn(Email);

   
    
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

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
    setCurrentTime(
      hours + ':' + min + ':' + sec
    );
    }, []);

    const [state, setState] = useState({
    isEnter: false
    }); 


    const location = useBackgroundGeolocationTracker();
    console.log('useTraking latitude');

    const hasLocationPermission = async () => {
    // if (Platform.OS === 'ios') {
    //   Geolocation.requestAuthorization('always');
    // }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        console.warn('im working')
      );
    }
    };

    if(location.longitude != null && location.longitude != null){

    var tf = geolib.isPointWithinRadius({latitude: location.latitude, longitude: location.longitude },
      { latitude:27.474198, longitude: 95.462181 },
      700,
    );

    var dist = geolib.getDistance({ latitude: location.latitude, longitude: location.longitude },
        { latitude:27.474198, longitude:95.462181 },
        0.01,
    );

    } else {
      
    }


    submit = () => {

    if(tf == true ) {
      fetch("http://192.168.189.175/api/attendence.php",
        {
            method:"POST",
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email:Email,
                date:currentDate,
                time:currentTime
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

    } else {
      alert("You are not inside office")
    }    

   
};
  
return (
   <View style={styles.container}>
      <View style={styles.container1} >
          <Button
           style={{justifyContent: 'space-between', padding: 30}}
            onPress={() =>navigation.navigate('Profile',{ email:Email }, {key: 'Home'})}
            title="Profile"
             />
             
         <Button 
          style={{justifyContent: 'space-between' ,padding: 30}}
            onPress={() =>navigation.navigate('LeaveApply')}
            title="ApplyLeave"
             />
         <Button
             style={{justifyContent: 'space-between', padding: 30}}
            onPress={() =>navigation.navigate('login')}
            title="Logout"
             />
      </View>

     <Text style={styles.text}> {email}</Text>
      <Text style={styles.textStyle}>{currentDate}</Text>
      <Text style={styles.textStyle}>{currentTime}</Text>
      <Text style={styles.text}>
      {tf?
            <View  style={styles.infoContainer}>
              <TouchableOpacity
                onPress={this.submit}
                style={styles.roundButton1}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Submit Attendance</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, padding: 10 }}>Radius Entered</Text>
            </View>
            :
            <View  style={styles.infoContainer}>
               <TouchableOpacity
                //onPress={this.submit}
                style={styles.roundButton2}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Enter radius first</Text>
              </TouchableOpacity>
               <Text style={{ fontSize: 20, padding:10 }}> You are {dist} away from office.</Text>
            </View>
           }
        </Text>
    </View>
       
    );
         
        
       
};

export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
      //backgroundColor: '#DCDCDC',
    },
    mapConatiner: {
      flex: 3,
    },
    container1: {
      flexDirection: "row",
      marginTop: 20,
       flexWrap: "wrap",
       marginBottom: 30,
      //backgroundColor: '#DCDCDC',
    },
    
   btn:{
    //backgroundColor: 'blue',
    padding: 18,
    width: '40%',
    height: 60,
    
  },
    text: {
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      //padding: 15,
    },
   
    roundButton1: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'dodgerblue',
      elevation: 8,
    },
    roundButton2: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'crimson',
      elevation: 8,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100,
      paddingTop: 15,
      paddingBottom: 40,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 50,
      color: 'black',
      padding: 10
  
    },
  });
  