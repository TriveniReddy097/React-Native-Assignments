import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavigationService from "./lib/NavigationService";
import AsteroidInfo from "./screens/AsteroidInfoScreen";
import HomeScreen from "./screens/homeScreen";

const stackNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		AsteroidInfo: {
			screen: AsteroidInfo,
		},
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

const AppContainer = createAppContainer(stackNavigator);

export default () => {
	return (
		<Provider store={store}>
			<AppContainer
				NavigationService={NavigationService}
				ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
			/>
		</Provider>
	);
};
