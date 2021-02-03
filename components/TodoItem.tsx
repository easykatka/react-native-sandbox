import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { ITodo } from './../App';

interface IProps {
	item: ITodo
	onDelete:(id:string) => void
}
export const TodoItem:React.FC<IProps> = ({ item ,onDelete}) => {
	return (
		<TouchableOpacity onPress={() => onDelete(item.id)}>
			<View >
				<Text style={styles.todo__item}>
					{item.value}
					</Text>
				</View>
		</TouchableOpacity>
	)
} 
const styles = StyleSheet.create({
	todo__item: {
		padding: 10,
		backgroundColor: 'steelblue',
		color:'white',
		marginBottom: 5,
		borderColor: 'black',
		borderWidth: 1,
		marginVertical:10,
	},
});