import React from 'react'
import {Text, View} from "react-native";
import * as Font from 'expo-font';
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
export default class App extends React.Component {
	@observable fontLoaded = false;

	constructor(props: any) {
		super(props)
		this.init();
	};

	init = async () => {
		await Font.loadAsync
		({
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
		});
		this.fontLoaded = true;
	};

	render() {
		return (
			<View>
				<Text>open up js</Text>
			</View>
		)
	}
};




