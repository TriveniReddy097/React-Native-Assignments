import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Modal,
	ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import {
	setAsteroidID,
	searchAstroidID,
	searchRandomID,
} from "../../store/actions/actions";

const { width, height } = Dimensions.get("window");

const Home = ({
	asteroidID,
	setAsteroidID,
	searchAstroidID,
	searchRandomID,
}) => {
	const { asteroidId } = asteroidID;

	return (
		<View style={styles.container}>
			<View style={styles.container1}>
				<TextInput
					style={styles.textInput}
					value={asteroidId}
					placeholder={"Enter Asteroid ID"}
					maxLength={7}
					onChangeText={(text) => setAsteroidID("asteroidId", text)}
				/>
				<TouchableOpacity
					style={[styles.submit, { backgroundColor: "#5B2C6F" }]}
					disabled={!asteroidId || asteroidId.length !== 7}
					onPress={() => searchAstroidID(asteroidId)}
				>
					<Text style={{ color: "white" }}>Submit</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.container2}>
				<TouchableOpacity
					style={styles.random}
					onPress={() => searchRandomID()}
				>
					<Text style={{ color: "white", fontSize: width * 0.05 }}>
						Random Asteroid
					</Text>
				</TouchableOpacity>
			</View>
			<Modal visible={asteroidID.loading} transparent={true}>
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator />
				</View>
			</Modal>
		</View>
	);
};

const mapStateToProps = ({ asteroidID }) => {
	return {
		asteroidID,
	};
};

export default connect(mapStateToProps, {
	setAsteroidID,
	searchAstroidID,
	searchRandomID,
})(Home);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: height * 0.15,
		backgroundColor: "#EAF2F8",
	},
	container1: {
		alignItems: "center",
		flexDirection: "row",
		borderWidth: 1,
		borderRadius: 5,
		height: height * 0.06,
		margin: 10,
	},
	textInput: {
		flex: 1,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		paddingLeft: 10,
		height: "100%",
		// borderColor: "transparent",
	},
	submit: {
		width: width * 0.3,
		height: "100%",
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	container2: {
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 5,
		height: height * 0.06,
		margin: 10,
	},
	random: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5B2C6F",
	},
});
