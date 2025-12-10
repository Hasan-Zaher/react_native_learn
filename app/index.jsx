import { StyleSheet, Text, View ,Image} from "react-native";

import Logo from "../assets/img/one.png"
import {Link } from "expo-router"


const Home = () => {

    return (        
         <View style={styles.container}> 
         <Image source={Logo} style={styles.img}/>
            <Text style={styles.title}>The Number 1</Text>   

        <Link href="/about" style={{marginTop:30,borderBottomWidth:1}}>About Page</Link>
        <Link href="/contact" style={{marginTop:30,borderBottomWidth:1}}>Contact Page</Link>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"  ,
        
 
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"green"
    },
    
    img:{
        marginVertical:20,
        maxWidth:90,
        maxHeight:90
    }
})