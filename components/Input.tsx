import { StyleSheet, TextInput } from "react-native"
import React from 'react'


interface IProps {
	[key: string]: any
}

export const Input: React.FC<IProps> = ({ style, ...props }) => {
	return (
		<TextInput onChangeText={()=>{}} {...props} style={{ ...styles.input, ...style }} />
	)
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	}
});