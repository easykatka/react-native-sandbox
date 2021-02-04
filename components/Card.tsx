import {  StyleSheet,  View } from "react-native"
import React from 'react'

interface IProps{
	style:any
}
export const Card: React.FC<IProps> = ({children , style}) => {
	return (
		<View style={{...styles.card,...style}}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	card:{
		color: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 30,
		backgroundColor: 'white',
		padding: 15,
		borderRadius:15,
	} 
});