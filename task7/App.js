import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import NavigationService from "./lib/NavigationService";
import EmployeeList from "./screens/EmployeeList/EmployeeList";
import EmployeeDetailScreen from "./screens/EmployeeDetailScreen/EmployeeDetailScreen";

const rootnavigator = createStackNavigator(
	{
		HomeScreen: {
			screen: EmployeeList,
		},
		EmployeeDetails: {
			screen: EmployeeDetailScreen,
		},
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
	}
);

const AppContainer = createAppContainer(rootnavigator);

export default () => {
	return (
		<AppContainer
			NavigationService={NavigationService}
			ref={(ref) => NavigationService.setTopLevelNavigator(ref)}
		/>
	);
};
