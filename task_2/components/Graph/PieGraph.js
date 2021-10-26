import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { pieData } from "../../constant/data";
const { width, height } = Dimensions.get("window");

const PieGraph = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Pie Chart</Text>
			<PieChart
				data={pieData}
				width={Dimensions.get("window").width - 16}
				height={height * 0.27}
				chartConfig={{
					backgroundColor: "#1cc910",
					backgroundGradientFrom: "#eff3ff",
					backgroundGradientTo: "#efefef",
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				style={{
					borderRadius: 16,
					alignItems: "center",
				}}
				accessor="population"
				backgroundColor="transparent"

				//for the absolute number remove if you want percentage
				// absolute
			/>
		</View>
	);
};

export default PieGraph;

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
