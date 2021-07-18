import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Favorites: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Favorites screen </Text>
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

