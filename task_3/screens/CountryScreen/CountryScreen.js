import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { getCapitalWeather } from "../../components/store/actions";

const { width, height } = Dimensions.get("window");
const Row = ({ label, value }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={styles.font}>{label} </Text>
			<Text style={styles.font}>{value} </Text>
		</View>
	);
};

const CountryScreen = ({ weatherReducer, getCapitalWeather }) => {
	const { capital, population, latlng, flag } = weatherReducer;
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				style={{ flex: 1 }}
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDMzXYBdgb37CH1nfjkd5q6EbABtulhSutQ&usqp=CAU",
				}}
			>
				<View style={styles.container1}>
					<Row label={"Capital: "} value={capital} />
					<Row label={"Population: "} value={population} />
					<Row label={"latlng: "} value={latlng} />
					<Row label={"flag: "} value={flag} />
					<View style={{ marginTop: 30 }}>
						<TouchableOpacity
							style={styles.submit}
							// disabled={!country}
							onPress={() => getCapitalWeather(country)}
						>
							<Text style={{ color: "white", fontSize: width * 0.05 }}>
								Submit
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const mapStateToProps = ({ weatherReducer }) => {
	return {
		weatherReducer,
	};
};

export default connect(mapStateToProps, { getCapitalWeather })(CountryScreen);

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		marginTop: height * 0.15,
		marginLeft: 10,
		alignItems: "flex-start",
	},
	font: {
		fontSize: width * 0.05,
	},
	submit: {
		borderRadius: 10,
		paddingLeft: 10,
		height: height * 0.06,
		width: width * 0.8,
		color: "white",
		backgroundColor: "#D4AC0D",
		fontSize: width * 0.05,
		justifyContent: "center",
		alignItems: "center",
	},
});
