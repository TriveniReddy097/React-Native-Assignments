import React from "react";
import NavigationService from "./lib/NavigationService";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import store from "./components/store";
import LandingScreen from "./screens/LandingScreen";
import CountryScreen from "./screens/CountryScreen";
import WeatherScreen from "./screens/WeatherScreen";

const rootNavigator = createStackNavigator(
	{
		LandingScreen: {
			screen: LandingScreen,
		},
		CountryScreen: {
			screen: CountryScreen,
		},
		WeatherScreen: {
			screen: WeatherScreen,
		},
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

const Appcontainer = createAppContainer(rootNavigator);

export default () => {
	return (
		<Provider store={store}>
			<Appcontainer
				NavigationService={NavigationService}
				ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
			/>
		</Provider>
	);
};
