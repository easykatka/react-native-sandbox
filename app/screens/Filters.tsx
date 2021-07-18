import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Filters: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Filters screen </Text>
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

