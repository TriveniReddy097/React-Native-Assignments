import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ImageBackground,
} from "react-native";
import { restAsteroid } from "../../store/actions/actions";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

const Row = ({ label, value }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={[styles.font, { fontWeight: "bold" }]}>{label} </Text>
			<Text style={styles.font}>{value} </Text>
		</View>
	);
};

const AsteriodInfo = ({ restAsteroid, asteroidID }) => {
	const { name, nasa_jpl_url, is_potentially_hazardous_asteroid, asteroidId } =
		asteroidID;
	useEffect(() => {
		return () => {
			restAsteroid();
		};
	}, []);
	const is_haxardous = is_potentially_hazardous_asteroid ? "Yes" : "No";
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgndImg}
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOt--Uti2tGdy63GPEatt4LUYEe2z_lQQmQ&usqp=CAU",
				}}
			>
				<View style={styles.details}>
					<Row label={"Asteroid info for Asteroid id"} value={asteroidId} />
					<Row label={"Name of Asteroid :"} value={name} />
					<Row label={"NASA JPL URL :"} value={nasa_jpl_url} />
					<Row
						label={"Is potentially hazardous asteroid ?:"}
						value={is_haxardous}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

const mapStateToProps = ({ asteroidID }) => {
	return {
		asteroidID,
	};
};

export default connect(mapStateToProps, { restAsteroid })(AsteriodInfo);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	details: {
		paddingTop: height * 0.15,
		paddingLeft: 10,
		alignItems: "flex-start",
	},
	font: {
		color: "white",
		fontSize: width * 0.05,
		marginTop: 10,
	},
	backgndImg: {
		height: "100%",
		width: "100%",
		resizeMode: "contain",
	},
});
