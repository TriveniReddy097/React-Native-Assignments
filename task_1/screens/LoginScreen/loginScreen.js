import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const LoginScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");
	const [showPassword, setShowPassword] = useState(true);
	let eye = { uri: "https://img.icons8.com/material-outlined/2x/visible.png" };
	let eyeOff = { uri: "https://cdn-icons-png.flaticon.com/128/876/876769.png" };

	const validate = () => {
		if (email === "Admin" && password === "Admin") {
			//console.log("correct credentials");
			setWarning("");
			props.navigation.navigate("Splash");
		} else {
			setWarning("Invalid credentials");
			setTimeout(() => setWarning(""), 3000);
		}
		setEmail("");
		setPassword("");
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}> Email</Text>
				<TextInput
					style={styles.textinput}
					value={email}
					placeholder="sample@gamil.com"
					onChangeText={(text) => setEmail(text)}
				/>
				<Text style={styles.text}> Password</Text>
				<View style={[styles.passwordView, styles.textinput]}>
					<TextInput
						style={styles.password}
						placeholder="password"
						value={password}
						secureTextEntry={showPassword}
						onChangeText={(text) => setPassword(text)}
					/>
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image style={styles.icon} source={showPassword ? eye : eyeOff} />
					</TouchableOpacity>
				</View>
			</View>
			{{ warning } && <Text style={styles.warning}> {warning}</Text>}
			<TouchableOpacity style={styles.button} onPress={validate}>
				<Text
					style={{
						color: "white",
						fontSize: width * 0.05,
						textAlign: "center",
					}}
				>
					{" "}
					Login{" "}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	warning: {
		color: "red",
		paddingTop: 10,
		fontSize: width * 0.035,
	},
	text: {
		fontSize: width * 0.05,
		paddingTop: 20,
	},
	textinput: {
		fontSize: 18,
		width: width * 0.7,
		height: height * 0.06,
		borderWidth: 1,
		borderRadius: 10,
		paddingLeft: 10,
		fontSize: width * 0.05,
	},
	passwordView: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	password: {
		flex: 1,
		fontSize: width * 0.05,
	},
	icon: {
		marginRight: width * 0.03,
		height: height * 0.03,
		width: width * 0.06,
	},
	button: {
		width: width * 0.7,
		height: height * 0.07,
		backgroundColor: "blue",
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
