import React from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from "react-native";
const { width, height } = Dimensions.get("window");

const MyDetails = ({ item }) => {
	const { firstName, lastName, title, picture, phone, email } = item;

	return (
		<View style={styles.details}>
			<Image style={styles.profilePic} source={{ uri: picture }} />
			<Text style={styles.name}>
				{firstName} {lastName}
			</Text>
			<Text
				style={{ fontSize: width * 0.05, color: "grey", paddingBottom: 10 }}
			>
				{title}
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<View style={styles.linking}>
					<TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
						<Image
							style={styles.icon}
							source={{
								uri: "https://cdn-icons-png.flaticon.com/128/545/545782.png",
							}}
						/>
						<Text style={styles.font}>Email</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.linking}>
					<TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
						<Image
							style={styles.icon}
							source={{
								uri: "https://cdn-icons-png.flaticon.com/128/1782/1782802.png",
							}}
						/>
						<Text style={styles.font}>Call</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.linking}>
					<TouchableOpacity onPress={() => Linking.openURL(`sms:${phone}`)}>
						<Image
							style={styles.icon}
							source={{
								uri: "https://cdn-icons-png.flaticon.com/128/1333/1333121.png",
							}}
						/>
						<Text style={styles.font}>message</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default MyDetails;

const styles = StyleSheet.create({
	details: {
		// flex: 1,
		alignItems: "center",
		backgroundColor: "#EAEDED",
	},
	name: {
		fontSize: width * 0.06,
		textAlign: "center",
		paddingTop: 10,
		fontWeight: "bold",
	},
	profilePic: {
		height: width * 0.2,
		width: width * 0.2,
		borderRadius: height / 2,
		resizeMode: "contain",
		marginRight: 20,
	},
	linking: {
		flex: 1,
		paddingBottom: 20,
		alignItems: "center",
	},
	icon: {
		height: width * 0.08,
		width: width * 0.08,
		resizeMode: "contain",
		marginBottom: 3,
	},
	font: {
		color: "#5DADE2",
	},
});
