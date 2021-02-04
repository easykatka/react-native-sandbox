import React from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { Card } from './../components/Card';
import colors from '../constans/colors'
import { Input } from './../components/Input';
import { NumberContainer } from '../components/NumberContainer';
import { BodyText } from '../components/BodyText';
import { MainButton } from '../components/MainButton';

interface IProps {
	startGameHandler: (selectedNumber: number | undefined) => void
}
export const StartGameScreen: React.FC<IProps> = ({ startGameHandler }) => {
	const [input, setInput] = React.useState('');
	const [confirm, setConfirm] = React.useState(false);
	const [selectedNumber, setSelectedNumber] = React.useState<number>()


	const numberInputHandler = (input: string) => {
		setInput(input.replace(/[^0-9/]/g, ''))
	}
	const resetInputHandler = () => {
		setInput('')
		setConfirm(false)
	}
	const confirmInputHandler = () => {
		if (+input === NaN || +input <= 0 || +input > 99) {
			Alert.alert('invalit number', 'Number bas to be a number beetween 1 and 99', [{ text: 'Okay', style: 'destructive' }])
			setConfirm(false)
			return
		}
		setSelectedNumber(+input)
		setInput('')
		setConfirm(true)
		Keyboard.dismiss()
	}
	let confirmedOutput;
	if (confirm) {
		confirmedOutput = <Card style={styles.summaryContainer}>
			<Text style={styles.selected}>You selected: </Text>
			<NumberContainer>{selectedNumber}</NumberContainer>

			<MainButton onPress={()=> startGameHandler(selectedNumber)} >START GAME</MainButton>
		</Card>
	}	
	return (
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
			<View style={styles.screen}>
				<BodyText style={styles.title}>Start a new game</BodyText>
				<Card style={styles.inputContainer}>
					<Text style={styles.title}>Select a number</Text>
					<Input value={input} onChangeText={numberInputHandler} blurOnSubmit autoCapitalize="none"
						maxLength={2} keyboardType='numeric' autoCorrect={false} style={styles.input} />
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button onPress={resetInputHandler} color={colors.accent} title='Reset' />
						</View>
						<View style={styles.button}>
							<Button color={colors.primary} title='Confirm' onPress={confirmInputHandler} />
						</View>
					</View>

				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	selected: {
		textAlign: 'center',
		fontSize: 30

	},
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	button: {
		width: '40%'
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
		paddingHorizontal: 15,
	},
	title: {
		color: 'black',
		fontSize: 20,
		fontFamily:'open-sans-bold',
		marginVertical:10,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center'
	}
})