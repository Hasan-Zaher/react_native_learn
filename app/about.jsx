import { Link } from "expo-router";
import { StyleSheet, Text,View } from "react-native";

const About = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>

            <Link href="/" style={{marginTop:40,borderBottomWidth:1}}>Home Page</Link>
        </View>
    )
}
export default About


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