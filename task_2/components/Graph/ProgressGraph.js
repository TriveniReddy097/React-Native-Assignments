import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { progressData } from "../../constant/data";

const ProgressGraph = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Progress Chart</Text>
			<ProgressChart
				data={progressData}
				width={Dimensions.get("window").width - 16}
				withCustomBarColorFromData={progressData}
				flatColor={true}
				height={220}
				chartConfig={{
					// backgroundColor: "#1cc910",
					backgroundColor: "white",
					backgroundGradientFrom: "white",
					backgroundGradientTo: "white",
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					style: {
						borderRadius: 16,
						alignItems: "center",
					},
				}}
				style={{
					marginVertical: 4,
					borderRadius: 16,
				}}
			/>
		</View>
	);
};

export default ProgressGraph;

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
