import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Modal,
	ActivityIndicator,
	ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import {
	setValue,
	searchCountry,
	getCapitalWeather,
} from "../../components/store/actions";

const { width, height } = Dimensions.get("window");

const LandingScreen = ({
	setValue,
	getCapitalWeather,
	searchCountry,
	weatherReducer,
}) => {
	const { country, loading } = weatherReducer;

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.container}
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDMzXYBdgb37CH1nfjkd5q6EbABtulhSutQ&usqp=CAU",
				}}
			>
				<View style={styles.container1}>
					<TextInput
						style={styles.textInput}
						value={country}
						placeholder={"Enter Capital"}
						onChangeText={(text) => setValue("country", text)}
					/>

					<TouchableOpacity
						style={styles.submit}
						disabled={!country}
						onPress={() => getCapitalWeather(country)}
					>
						<Text style={{ color: "white", fontSize: width * 0.05 }}>
							Submit
						</Text>
					</TouchableOpacity>
				</View>
				<Modal visible={loading} transparent={true}>
					<View
						style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
					>
						<ActivityIndicator />
					</View>
				</Modal>
			</ImageBackground>
		</View>
	);
};

const mapStateToProps = ({ weatherReducer }) => {
	return {
		weatherReducer,
	};
};

export default connect(mapStateToProps, {
	setValue,
	searchCountry,
	getCapitalWeather,
})(LandingScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	container1: {
		paddingTop: 100,
		margin: 20,
	},
	textInput: {
		borderRadius: 10,
		paddingLeft: 10,
		borderWidth: 1,
		height: height * 0.06,
		fontSize: width * 0.05,
	},
	submit: {
		borderRadius: 10,
		marginTop: 20,
		height: height * 0.06,
		color: "white",
		backgroundColor: "#D4AC0D",
		fontSize: width * 0.05,
		justifyContent: "center",
		alignItems: "center",
	},
});
