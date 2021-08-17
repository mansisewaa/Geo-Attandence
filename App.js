import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import login from "./screens/login";
//import Example from './example';
import Home from "./screens/Home";
import Leave from "./screens/Leave";
import Profile from "./screens/Profile";
import LeaveApply from './screens/leaveapply';


const Stack = createStackNavigator();



const App = ()=>{
  
     return (
      <NavigationContainer>
        <Stack.Navigator 

          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: "#009387" },
          }}
        >
          
         
          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
            
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Attendance',
                }}
          />
          
          <Stack.Screen
            name="Leave"
            component={Leave}
            options={{
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              gestureEnabled: false,
            }}
          />

          <Stack.Screen
            name="LeaveApply"
            component={LeaveApply}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
