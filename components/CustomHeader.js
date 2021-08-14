import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';



function CustomHeader({title, isHome, navigation}) {
    return (
      <View style={{flexDirection: 'row', height: 50}}> 
      <View style={{flex:1, justifyContent: 'center'}}>
        {
             isHome?
             <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image style={{width:30, height:30}}
                source={require("../assets/m.png")}
                resizeMode="contain"
            />
            </TouchableOpacity>
             : 
            <TouchableOpacity 
            style={{flex:1, justifyContent: 'center'}}
            onPress={()=> navigation.goBack()}
            >
              <Image style={{width:20, height:30}}
                    source={require('../assets/left-arrow.png')}
                    resizeMode="contain"
                /> 
           </TouchableOpacity>
        }
      </View>
        <View style={{flex:1.5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{title}</Text>
         </View>
         <View style={{flex:1.5, justifyContent: 'center'}}></View>
      </View>
  
    )
  };

  export default CustomHeader;