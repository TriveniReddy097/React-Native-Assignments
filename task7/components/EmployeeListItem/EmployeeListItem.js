import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	TouchableWithoutFeedback,
} from "react-native";
const { width, height } = Dimensions.get("window");
import NavigationService from "../../lib/NavigationService";

const EmployeeListItem = ({ item }) => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableWithoutFeedback
				onPress={() =>
					NavigationService.push("EmployeeDetails", {
						myDetails: item,
					})
				}
			>
				<View style={styles.card}>
					<View style={{ marginTop: 5, marginBottom: 5 }}>
						<Image style={styles.profilePic} source={{ uri: item.picture }} />
					</View>
					<View style={{ flex: 1, justifyContent: "center" }}>
						<Text style={[styles.font, { color: "black", fontWeight: "bold" }]}>
							{item.firstName} {item.lastName}
						</Text>
						<Text style={styles.font}>{item.title}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default EmployeeListItem;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
		borderBottomWidth: 1,
		width: width,
		borderRadius: 5,
		height: height * 0.1,
	},
	profilePic: {
		height: "100%",
		width: width * 0.2,
		borderRadius: height / 2,
		resizeMode: "contain",
		marginRight: 20,
	},
	font: {
		fontSize: width * 0.045,
	},
});
