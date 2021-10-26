import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native";
import HamburgerMenu from "../../components/common/hamburgerMenu";

const AboutScreen = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<HamburgerMenu
				onPress={() => props.navigation.toggleDrawer()}
				title={"About"}
			/>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={styles.text}> This is About screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default AboutScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
});
