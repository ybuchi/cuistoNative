import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Recipes(){
   
    const recipeItems = ['Cheese Cake With Pine Nuts and Stuff', 'Cinnamon Apple Pie', "Mom's Jelly"];
    
    return(
        <View>
          <Text style={styles.title}>Recipes</Text>
          {recipeItems.map((item, index) => (
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