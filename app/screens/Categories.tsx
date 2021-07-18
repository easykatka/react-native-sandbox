import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Categories: React.FC = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Categories screen </Text>
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

