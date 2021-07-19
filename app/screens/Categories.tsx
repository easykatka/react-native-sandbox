import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {NavigationStackScreenComponent} from "react-navigation-stack";
import {ICategories} from "../models/category";
import {CategoryGridItem} from "../components/CategoryGrid";


export const Categories: NavigationStackScreenComponent = ({navigation}) => {
    const renderItem = ({item}: { item: ICategories }) => <CategoryGridItem item={item} navigation={navigation}/>
    return (
        <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={CATEGORIES}
                  renderItem={renderItem}/>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

