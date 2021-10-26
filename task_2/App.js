import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NavigationService from "./lib/NavigationService";
import DashboardScreen from "./screens/dashboard";
import LoginScreen from "./screens/loginScreen";
import SplashScreen from "./screens/splashScreen";

const rootNavigator = createStackNavigator(
	{
		Login: {
			screen: LoginScreen,
		},
		Splash: {
			screen: SplashScreen,
		},
		Dashboard: {
			screen: DashboardScreen,
		},
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

const AppContainer = createAppContainer(rootNavigator);

export default () => {
	return (
		<AppContainer
			NavigationService={NavigationService}
			ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
		/>
	);
};
