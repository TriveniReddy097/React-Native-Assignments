import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import HamburgerMenu from "../../components/common/hamburgerMenu";

const HomeScreen = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<HamburgerMenu
				onPress={() => props.navigation.toggleDrawer()}
				title={"Home"}
			/>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={styles.text}> This is Home screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
});
