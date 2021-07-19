import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationStackScreenComponent} from "react-navigation-stack";
import {CATEGORIES} from "../data/dummy-data";

export const CategoryMeals: NavigationStackScreenComponent = ({navigation}) => {

    const categoryId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)


    return (
        <View style={styles.screen}>
            <Text> CategoryMeals screen </Text>
            <Text> {selectedCategory?.title} </Text>
        </View>
    )
};

CategoryMeals.navigationOptions = ({navigation}) => {
    const categoryId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    return {
        headerTitle: selectedCategory?.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



