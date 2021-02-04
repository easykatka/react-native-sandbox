import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import colors from '../constans/colors'
interface IProps {
	title: string
}
export const Header: React.FC<IProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle} >{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.primary,
		width: '100%'

	},
	headerTitle: {
		paddingVertical: 40,
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center'
	},

});