import React from "react";
import { StyleSheet,Button,View,Text} from "react-native";

const Intro =(props)=>{
    return(
        <View>
            <Text> Quick Witted</Text>
            <Text> Welcome</Text>
            <Button
            title="Continue"
            onPress={()=>props.navigation.navigate("SignUp")}
            >
              
            </Button>
        </View>
    )

}

export default Intro;