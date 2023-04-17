import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

interface HomeScreenProps {
    navigation: {navigate: (route: string) => void},
    onSubmit: (email: string, password: string) => void;
  }

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, onSubmit })=> {

    const handleLogin = () => {
        console.log("Logging in...")
        navigation.navigate('Dashboard')
    }
    
    return(
        <View style={styles.padded}>
                <Text style={styles.title}>Welcome to</Text>
                <Image style={styles.tinyLogo} source={require("/Users/Yannik/Cuisto/assets/4.png")}/>
                <Text style={styles.subtitle}>The app for home chefs.</Text>
            <View style={styles.padded}>
                <TextInput style={styles.input} placeholder="Username"/>
                <TextInput style={styles.input} placeholder="Password"/>
                <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.subtitle}>Login</Text>
                </TouchableOpacity>
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
        height: 100,
        resizeMode: "contain"
    },
    padded: {
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})

export default HomeScreen;