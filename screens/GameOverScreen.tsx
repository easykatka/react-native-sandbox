import { Button, Image, StyleSheet, Text, View } from "react-native"
import React from 'react'
import { BodyText } from "../components/BodyText"
import { MainButton } from "../components/MainButton"


interface IProps {
	guessRounds: number
	startGameHandler: (num: number) => void
	userNumber: number | undefined
}
export const GameOverScreen: React.FC<IProps> = ({ guessRounds, startGameHandler, userNumber }) => {
	return (
		<View style={styles.screen}>
			<BodyText>The Game is Over</BodyText>
			<View style={styles.imgContainer}>
				<Image style={styles.img} resizeMode='cover' source={require('../assets/success.png')} /></View>
			<BodyText>Number of rounds: {guessRounds}</BodyText>
			<BodyText>Number was : {userNumber}</BodyText>
			<MainButton onPress={() => startGameHandler(0)} > NEW GAME </MainButton>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
	img: {
		width:'100%',
		height:'100%'
	},
	imgContainer: {
		width: 300,
		height: 300,
		borderRadius: 200,
		borderWidth: 6,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical:30,
	}

})