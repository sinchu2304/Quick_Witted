import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Attendence from "../screens/Attendence";
import ChatBot from "../screens/ChatBot";
import HomeScreen from "../screens/HomeScreen"

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


function Home(){
    return(

        <Tabs.Navigator>
         <Tabs.Screen name="HomeScreen" component={HomeScreen}/>       
        
        <Tabs.Screen name="Attendence" component={Attendence}/>
        <Tabs.Screen name="ChatBot" component={ChatBot}/>
    </Tabs.Navigator>
    )
}



function AppNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Intro"  component={Intro}/>
        <Stack.Screen name="SignUp"  component={SignUp}/>
        <Stack.Screen name="SignIn"  component={SignIn}/>
        <Stack.Screen name="Home"   options={{ headerShown: false }} component={Home}/>
    </Stack.Navigator>
            
        </NavigationContainer>
    );
}

export default AppNavigator;