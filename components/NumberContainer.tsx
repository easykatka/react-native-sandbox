
import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import colors from "../constans/colors"

export const NumberContainer: React.FC = ({ children }) => {
	console.log(children)
	return (
		<View style={styles.root}>
			<Text style={styles.number}>
				{children}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		borderWidth: 2,
		borderColor: colors.accent,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
	},
	number: {
		color: colors.accent,
		fontSize: 30
	}
});