import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import AboutScreen from "./screens/AboutScreen";
import SettingsScreen from "./screens/SettingsScreen";

const { width } = Dimensions.get("window");

const DrawerNavigator = createDrawerNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
		},
		AboutScreen: {
			screen: AboutScreen,
		},
		SettingsScreen: {
			screen: SettingsScreen,
		},
	},
	{
		initialRouteName: "HomeScreen",
		drawerWidth: width * 0.6,
		contentOptions: {
			itemsContainerStyle: {
				marginVertical: 50,
			},
			iconContainerStyle: {
				opacity: 1,
			},
		},
	}
);

const rootNavigator = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	Splash: {
		screen: SplashScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	Home: {
		screen: DrawerNavigator,
		navigationOptions: {
			headerShown: false,
		},
	},
});

const AppContainer = createAppContainer(rootNavigator);

export default () => {
	return <AppContainer />;
};
