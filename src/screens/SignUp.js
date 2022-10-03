import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function SignUp(props){
    return(
        <View>
            
            <TextInput> EMAIL</TextInput>
            <TextInput>Password</TextInput>
            <TextInput>Confirm Password</TextInput>
            <Button
            title="SignUp"
            onPress={()=>props.navigation.navigate("Home")}    
           >
            </Button>
         <Button
         title="Already have an account"
         onPress={()=>props.navigation.navigate("SignIn")}/>

        </View>
    );
}
export default SignUp;