import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { lineData } from "../../constant/data";

const LineGraph = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Line Chart</Text>
			<LineChart
				data={lineData}
				width={Dimensions.get("window").width - 16}
				height={220}
				withInnerLines={false}
				chartConfig={{
					backgroundColor: "white",
					backgroundGradientFrom: "white",
					backgroundGradientTo: "white",
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				style={{
					borderRadius: 16,
					justifyContent: "center",
					alignItems: "center",
				}}
			/>
		</View>
	);
};

export default LineGraph;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		padding: 10,
	},
	header: {
		textAlign: "center",
		fontSize: 18,
		padding: 16,
		marginTop: 16,
	},
});
