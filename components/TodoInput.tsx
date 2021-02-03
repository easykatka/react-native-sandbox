import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

interface IProps {
	submitHandler: (term: string) => void
	modalFlag: boolean
	setModalFlag: (arg0: boolean) => void
}
export const TodoInput: React.FC<IProps> = ({ submitHandler, setModalFlag, modalFlag }) => {
	const [term, setTerm] = React.useState('')
	const changeHandler = (e: string) => setTerm(e)

	return <Modal animationType='slide' visible={modalFlag} style={styles.modal}>
		<View style={styles.container}>
			<TextInput placeholder='Goal' value={term} style={styles.input} onChangeText={changeHandler} />
			<View style={styles.btn__container}>
				<View style={styles.btn__item}>
					<Button title='ADD' onPress={() => {
						submitHandler(term)
						setTerm('')
						setModalFlag(false)
					}} />
				</View>
				<View style={styles.btn__item}>
					<Button title='Cancel' color='red' onPress={() => {
						setTerm('')
						setModalFlag(false)
					}} />
				</View>
			</View>
		</View>
	</Modal>
}

const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'grey'
	},
	btn__item: {
		width:'30%'
	},
	btn__container: {
		flexDirection: 'row',
		width: '80%',
		justifyContent:'space-around'
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: '80%',
		marginBottom: 20,
	}, container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	},
});