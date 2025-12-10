import { Link } from "expo-router";
import { StyleSheet, Text,View } from "react-native";

const Contact = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>

            <Link href="/" style={{marginTop:40,borderBottomWidth:1}}>Home Page</Link>
        </View>
    )
}
export default Contact


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"  
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"red"
    },
    
    img:{
        marginVertical:20,
        maxWidth:90,
        maxHeight:90
    }
})