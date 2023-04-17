import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Banner(){
       
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    listItem: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
    container: {
        width: 400,
        height:90,
        backgroundColor: '#000',
        borderRadius: 5,
    }
    });