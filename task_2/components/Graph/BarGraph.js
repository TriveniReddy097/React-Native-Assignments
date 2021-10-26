import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { data } from "../../constant/data";

const { width, height } = Dimensions.get("window");
const BarGraph = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Bar Chart</Text>
			<BarChart
				data={data}
				width={Dimensions.get("window").width - 30}
				height={height * 0.3}
				yAxisLabel={"$ "}
				fromZero
				withInnerLines={true}
				withCustomBarColorFromData={data}
				flatColor={true}
				showBarTops={false}
				xLabelsOffset={2}
				chartConfig={{
					backgroundColor: "white",
					backgroundGradientFrom: "white",
					backgroundGradientTo: "white",
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(66, 73, 73, ${opacity})`,
					barRadius: 5,
					style: {
						borderRadius: 16,
					},
				}}
				style={{
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 16,
				}}
			/>
		</View>
	);
};

export default BarGraph;

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
