import React from "react";
import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const HamburgerMenu = ({ onPress, title }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.icon} onPress={onPress}>
				<Image
					style={styles.image}
					source={require("../../assets/images/hamburger-menu.png")}
				/>
			</TouchableOpacity>
			<Text style={styles.title}> {title}</Text>
		</View>
	);
};

export default HamburgerMenu;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		marginTop: Constants.statusBarHeight,
		// elevation: 5,
	},
	icon: {
		marginLeft: 20,
		marginRight: 10,
	},
	image: {
		height: 25,
		width: 25,
	},
	title: {
		fontSize: 20,
	},
});
