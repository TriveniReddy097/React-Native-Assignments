import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";
import NavigationService from "../../lib/NavigationService";

const { width, height } = Dimensions.get("window");

const Header = () => {
	return (
		<View style={styles.header}>
			<TouchableWithoutFeedback onPress={() => NavigationService.pop()}>
				<Image
					style={styles.back}
					source={{
						uri: "https://img.icons8.com/material-outlined/2x/back.png",
					}}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		paddingTop: 35,
		paddingBottom: width * 0.03,
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "#EAEDED",
	},
	back: {
		height: 40,
		width: 60,
		resizeMode: "contain",
	},
});
