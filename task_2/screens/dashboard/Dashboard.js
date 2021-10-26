import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	SafeAreaView,
} from "react-native";
import BarGraph from "../../components/Graph/BarGraph";
import LineGraph from "../../components/Graph/LineGraph";
import PieGraph from "../../components/Graph/PieGraph";
import ProgressGraph from "../../components/Graph/ProgressGraph";

const { width, height } = Dimensions.get("window");

const DashboardScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.text}> Data Visualization</Text>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View>
						<LineGraph />
						<PieGraph />
						<BarGraph />
						<ProgressGraph />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default DashboardScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "white",
	},
	text: {
		textAlign: "center",
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: width * 0.07,
	},
});
