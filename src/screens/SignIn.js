import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function SignIn(props){
    return(
        <View>
            <TextInput>Email</TextInput>
            <TextInput>Password</TextInput>
            <Button
            title="SignIn"
            onPress={()=>props.navigation.navigate("Home")}>

            </Button>
        </View>
    );
}
export default SignIn;