import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}

export default function App() {
	const [userNumber, setUserNumber] = React.useState<number>();
	const [guessRounds, setGuessRounds] = React.useState<number>(0);
	const [dataLoader, setDataLoader] = React.useState(false);
	if (!dataLoader) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoader(true)}
				onError={(err:string) => console.log(err)} />
		)
	}
	const startGameHandler = (selectedNumber: number | undefined) => {
		setUserNumber(selectedNumber)
		setGuessRounds(0)
	}
	const gameOverHandler = (numOfRounds: number) => {
		setGuessRounds(numOfRounds)
	}
	let content = <StartGameScreen startGameHandler={startGameHandler} />
	if (userNumber && guessRounds <= 0) { content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> }
	else if (guessRounds > 0) { content = <GameOverScreen userNumber={userNumber} guessRounds={guessRounds} startGameHandler={startGameHandler} /> }
	return (
		<View style={styles.screen}>
			<Header title='Guess a number' />
			{content}
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})