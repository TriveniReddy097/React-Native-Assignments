import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import MyManager from "../../components/DetailsCard/myManager";
import MyDetails from "../../components/DetailsCard/myDetails";
import Header from "../../components/commons/Header";
import { data } from "../../constanst/data";
import EmployeeListItem from "../../components/EmployeeListItem";

const EmployeeDetailScreen = (props) => {
	const { myDetails } = props.navigation.state.params;
	const myEmps = data.filter((emp) => emp.managerId === myDetails.id);
	const myManager = data.find((emp) => emp.id === myDetails.managerId);

	return (
		<View style={styles.container}>
			<Header />
			<View>
				{myManager && <MyManager item={myManager} />}
				<MyDetails item={myDetails} />
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={myEmps}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<EmployeeListItem item={item} navigateTo={"level3Screen"} />
					)}
					pagingEnabled={false}
				/>
			</View>
			<View />
		</View>
	);
};

export default EmployeeDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
