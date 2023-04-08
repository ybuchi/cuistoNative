import React from "react";
import { StyleSheet, 
        View, 
        Text, 
        TextInput, 
        Image,
        SafeAreaView
     } from "react-native";


export default function HomeScreen(){
    return(
        <View style={styles.padded}>
            <View>
                <Text style={styles.title}>Welcome to Cuisto</Text>
                <Text style={styles.subtitle}>The app for home chefs.</Text>
            </View>
            <View style={styles.padded}>
                <SafeAreaView>
                    <TextInput style={styles.input} placeholder="Username"/>
                    <TextInput style={styles.input} placeholder="Password"/>
                </SafeAreaView>
                
            </View>
            <View>
                <Image style={styles.tinyLogo} source={require("/Users/Yannik/Cuisto/assets/CUISTO-splash.png")}/>
            </View>
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 15,
        textAlign: "center" 
    },
    tinyLogo: {
        width: 400,
        height: 400
    },
    padded: {
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
})