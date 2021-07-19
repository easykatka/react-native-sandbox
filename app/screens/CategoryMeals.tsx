import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NavigationStackScreenComponent} from "react-navigation-stack";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {IMeal} from "../models/meal";

export const CategoryMeals: NavigationStackScreenComponent = ({navigation}) => {

    const categoryId = navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))
    const renderMealItem = ({item}: { item: IMeal }) => <View><Text>{item.title}</Text></View>


    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id}
                      renderItem={renderMealItem}/>

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



