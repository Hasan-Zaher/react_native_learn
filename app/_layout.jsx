
import { Link, Slot, Stack } from "expo-router";
import { StyleSheet, Text,View } from "react-native";

const RootLayout = () => {
    return(
       
        <Stack screenOptions={{
            headerStyle:{backgroundColor:"#ddd"}, //لون خلفية الهيدر
            headerTintColor:"#333"// لون نص الهيدر
 
    
        }}> 
            <Stack.Screen name="index" options={{title:"Home"}}/>
            <Stack.Screen name="about" options={{title:"About"}}/>
            <Stack.Screen name="contact" options={{title:"Contact" }}/>
        </Stack>
 
    )
}
export default RootLayout


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:30  ,
       
    },
    footer:{
        marginBottom:10
    },
   
})


 
