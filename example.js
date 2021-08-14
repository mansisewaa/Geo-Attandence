import React,  {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Boundary, {Events} from 'react-native-boundary';
import useBackgroundGeolocationTracker from './useBgTracking';
import * as geolib from 'geolib';
//import { userLogin } from './screens/login';



//import { loadOptions } from '@babel/core';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


const Example = () => {
  
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const Email = userLogin();

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      year + ':' + month + ':' + date 
    );
    setCurrentTime(
      hours + ':' + min + ':' + sec
    );
  }, []);
  
  submit = () => {
    
    fetch("http://192.168.161.175/api/attendence.php",
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
        .then((responseJson)=>
            {
              if(responseJson === 1 ){
                alert("Updated");
            }
            else {
                alert("Server Error");
            }
            }
        )
        .catch((error)=>
        {
            alert("Error"+error);
        }
        )

    }
   
  const [state, setState] = useState({
        isEnter: false
      }); 
	  
  const location = useBackgroundGeolocationTracker();
  console.log('useTraking latitude', location.latitude);
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
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
        <Text style={styles.textStyle}>{currentDate}</Text>
        
          <Text style={styles.text}>
           Please wait fetching location. If you see this for more then a minute manually enable your location.
          </Text>
        </View>
      </View>
    );
 }

 if( tf == true){
   return(
    <View style={styles.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.textStyle}>{currentDate}</Text>
      <Text style={styles.textStyle}>{currentTime}</Text>
         <TouchableOpacity
            onPress={this.submit}
            style={styles.roundButton1}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Submit Attendance</Text>
         </TouchableOpacity>
        <Text style={styles.text}>Radius Entered.</Text>
          
      </View>
    </View>
   );
 
  } else {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
      <Text style={styles.textStyle}>{currentDate}</Text>
      <TouchableOpacity
            //onPress={buttonClickedHandler}
            style={styles.roundButton2 }>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Enter Radius First</Text>
         </TouchableOpacity>
        <Text style={styles.text}>
        You are {dist} meters away from office.
        </Text>
      </View>
    </View>
  );
 }
  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#DCDCDC',
  },
  mapConatiner: {
    flex: 3,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 38,

  
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
    padding: 134,
  },
  textStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 33,
    color: 'black',

  },
});

export default Example;