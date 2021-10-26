import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import HomeScreen from "../HomeScreen";

const { width } = Dimensions.get("window");

const SplashScreen = (props) => {
	useEffect(() => {
		setTimeout(() => {
			props.navigation.replace("Home");
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome user!</Text>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: width * 0.05,
	},
});
