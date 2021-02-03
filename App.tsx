
import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { TodoItem } from './components/TodoItem';
import { TodoInput } from './components/TodoInput';

export interface ITodo {
	id: string,
	value: string
}
export default function App() {
	const [todoList, setTodoList] = React.useState([] as ITodo[])
	const [modalFlag, setModalFlag] = React.useState(false)
	const submitHandler = (term: string) => {
		setTodoList((todoList) => [...todoList, { id: Math.random().toString(), value: term }
		])
	}
	const onDelete = (id: string) => {
		setTodoList(todoList => todoList.filter(item => id !== item.id))
	}

	return (
		<View style={styles.screen}>
			<Button title='Add new todo' onPress={() => setModalFlag(true)} />
			<TodoInput submitHandler={submitHandler} modalFlag={modalFlag} setModalFlag={setModalFlag} />
			<FlatList keyExtractor={(item: ITodo, index) => item.id}
				data={todoList} renderItem={itemData =>
					<TodoItem onDelete={onDelete} item={itemData.item} />}>
			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		marginTop: 50,
		padding: 50,
	},

});
