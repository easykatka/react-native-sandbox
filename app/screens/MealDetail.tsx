import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const MealDetail: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text> MealDetail screen </Text>
        </View>
    )
};

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)

