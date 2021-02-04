import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { BodyText } from '../components/BodyText';
import { MainButton } from '../components/MainButton';
import { NumberContainer } from '../components/NumberContainer';
import { Card } from './../components/Card';
import { Ionicons } from '@expo/vector-icons'


const generateRandomBetween = (min: number, max: number, exclude: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min) + min)
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return rndNum
	}
}
interface IProps {
	userChoice: number,
	onGameOver: (num: number) => void
}
export const GameScreen: React.FC<IProps> = ({ userChoice, onGameOver }) => {
	const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userChoice))
	const currentLow = React.useRef(1)
	const currentHigh = React.useRef(100)
	const [rounds, setRounds] = React.useState<number>(0);

	React.useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(rounds)
		}
	}, [currentGuess]);

	const nextGuessHandler = (direction: string) => {
		if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
			Alert.alert('Don\'t lie', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
			return
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess
		} else {
			currentLow.current = currentGuess
		}
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
		setCurrentGuess(nextNumber)
		setRounds(rounds => rounds + 1)
	}

	return (
		<View style={styles.screen}>
			<BodyText> Opponent's Guess: </BodyText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.btnContainer}>
				<MainButton onPress={nextGuessHandler.bind(this, 'lower')} > <Ionicons name='md-remove' size={24} color='white' /> </MainButton>
				<MainButton onPress={nextGuessHandler.bind(this, 'greater')} ><Ionicons name='md-add' size={24} color='white' /></MainButton>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	},

})