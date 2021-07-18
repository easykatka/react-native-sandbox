import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CategoryMeals: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text> CategoryMeals screen </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



