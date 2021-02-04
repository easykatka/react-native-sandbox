
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constans/colors'


export const MainButton = ({ children ,onPress}: any) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>
					{children}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical:12,
		paddingHorizontal:30,
		borderRadius:30,
	},
	buttonText: {
		color:'white',
		fontFamily:'open-sans',
		fontSize:18,
		
	},

})