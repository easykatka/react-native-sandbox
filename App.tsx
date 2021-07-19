import React from 'react'
import * as Font from 'expo-font';
import {observable} from "mobx";
import {observer} from "mobx-react";

import MealsNavigator from "./app/navigation/"
import {enableScreens} from 'react-native-screens'

@observer
export default class App extends React.Component {
	@observable fontLoaded: boolean = false;

	constructor(props: any) {
		super(props)
		enableScreens();
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
		if (!this.fontLoaded) return null;
		return (
			<MealsNavigator/>
		)
	}
};




