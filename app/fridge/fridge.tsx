import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Banner from "../components/banner/banner";

export default function Fridge(){

    const ingredientTypes = [
        'Meats & Poultry',
        'Vegetables',
        'Spices',
        'Baking Items',
        'Rice & Pasta'
    ]
       
    return(
        <View>
          <Text style={styles.title}>Fridge</Text>
          {ingredientTypes.map((item, index) => (
            <Text style={styles.listItem} key={index}>
              {item}
            </Text>
          ))}
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
    });