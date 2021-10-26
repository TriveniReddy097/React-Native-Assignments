import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const MyManager = ({ item }) => {
	return (
		<View style={styles.details}>
			<Image style={styles.manager} source={{ uri: item.picture }} />
			<Text style={styles.name}>
				{item.firstName} {item.lastName}
			</Text>
			<Text
				style={{ fontSize: width * 0.04, color: "grey", paddingBottom: 20 }}
			>
				{item.title}
			</Text>
		</View>
	);
};

export default MyManager;

const styles = StyleSheet.create({
	details: {
		// flex: 1,
		alignItems: "center",
		backgroundColor: "#EAEDED",
	},
	name: {
		fontSize: width * 0.04,
		textAlign: "center",
		paddingTop: 10,
		fontWeight: "bold",
	},
	manager: {
		height: width * 0.12,
		width: width * 0.12,
		borderRadius: height / 2,
		resizeMode: "contain",
		marginRight: 20,
	},
});
