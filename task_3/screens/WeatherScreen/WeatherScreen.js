import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { resetData } from "../../components/store/actions";

const { width, height } = Dimensions.get("window");

const Row = ({ label, value, unit }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={styles.font}>{label} </Text>
			<Text style={styles.font}>{value} </Text>
			<Text style={styles.font}>{unit} </Text>
		</View>
	);
};

const WeatherScreen = ({ weatherReducer, resetData }) => {
	const { temperature, weather_icons, wind_speed, precip } = weatherReducer;
	console.log(weather_icons);

	useEffect(() => {
		return () => {
			resetData();
		};
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				style={{ flex: 1 }}
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDMzXYBdgb37CH1nfjkd5q6EbABtulhSutQ&usqp=CAU",
				}}
			>
				<View style={styles.container1}>
					<View style={{ flexDirection: "row" }}>
						{weather_icons.map((icon, index) => (
							<View key={index}>
								<Image style={styles.icon} source={{ uri: icon }} />
							</View>
						))}
					</View>
					<Row label={"temperature: "} value={temperature} unit={"°C|°F"} />
					<Row label={"wind_speed: "} value={wind_speed} unit={"Km/h"} />
					<Row label={"precip: "} value={precip} unit={"%"} />
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

export default connect(mapStateToProps, { resetData })(WeatherScreen);

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		marginTop: height * 0.15,
		marginLeft: 10,
		alignItems: "flex-start",
	},
	icon: {
		margin: 10,
		height: height * 0.12,
		width: width * 0.3,
		resizeMode: "contain",
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
