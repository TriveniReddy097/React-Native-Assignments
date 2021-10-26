import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	FlatList,
	Dimensions,
} from "react-native";
import { data } from "../../constanst/data";
import EmployeeListItem from "../../components/EmployeeListItem";

const { width, height } = Dimensions.get("window");

const EmployeeList = () => {
	const [searchText, setSearchText] = useState("");
	const [filterData, setFilteredData] = useState([]);

	const searchData = (text) => {
		setSearchText(text);
		let filteredArray = data.filter((item) => item.firstName.includes(text));
		setFilteredData(filteredArray);
	};
	return (
		<View style={styles.container}>
			<Text style={{ textAlign: "center", fontSize: width * 0.06 }}>
				{" "}
				Employee List
			</Text>

			<View>
				<View style={styles.container1}>
					<TextInput
						placeholder="search"
						value={searchText}
						style={styles.textInput}
						onChangeText={searchData}
					/>
				</View>
				<FlatList
					data={filterData && filterData.length > 0 ? filterData : data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View>
							<EmployeeListItem item={item} />
						</View>
					)}
					pagingEnabled={false}
				/>
			</View>
		</View>
	);
};

export default EmployeeList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: "white",
	},
	header: {
		// marginTop: height * 0.06,
		// paddingTop: width * 0.15,
		paddingBottom: width * 0.03,
		alignItems: "center",
		justifyContent: "center",
	},
	container1: {
		alignItems: "center",
		flexDirection: "row",
		borderWidth: 7,
		borderColor: "grey",
		height: height * 0.06,
		// marginTop: height * 0.15,
	},
	textInput: {
		flex: 1,
		paddingLeft: 10,
		height: "100%",
		fontSize: width * 0.05,
		// borderColor: "transparent",
	},
});
