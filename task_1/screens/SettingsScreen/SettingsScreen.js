import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";
import HamburgerMenu from "../../components/common/hamburgerMenu";

const SettingsScreen = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<HamburgerMenu
				onPress={() => props.navigation.toggleDrawer()}
				title={"Settings"}
			/>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={styles.text}> This is Settings screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
});
