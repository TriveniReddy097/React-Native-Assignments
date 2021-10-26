import React, { useState } from "react";
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	TextInput,
	Dimensions,
	StyleSheet,
} from "react-native";
import NavigationService from "../../lib/NavigationService";

const { width, height } = Dimensions.get("window");

const LoginScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");
	const [showPassword, setShowPassword] = useState(true);
	let eye = { uri: "https://img.icons8.com/material-outlined/2x/visible.png" };
	let eyeOff = { uri: "https://cdn-icons-png.flaticon.com/128/876/876769.png" };

	const validateUser = () => {
		if (email === "Admin" && password === "Admin") {
			setWarning("");
			NavigationService.navigate("Splash");
		} else {
			setWarning("Invalid Credentials");
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
					placeholder="sample@gmail.com"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Text style={styles.text}> Password</Text>
				<View style={[styles.passwordView, styles.textinput]}>
					<TextInput
						style={styles.password}
						placeholder="Password"
						value={password}
						secureTextEntry={showPassword}
						onChangeText={(text) => setPassword(text)}
					/>
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image style={styles.icon} source={showPassword ? eye : eyeOff} />
					</TouchableOpacity>
				</View>
			</View>
			{{ warning } && <Text style={styles.warning}> {warning} </Text>}
			<TouchableOpacity style={styles.button} onPress={validateUser}>
				<Text style={styles.loginText}> Login</Text>
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
		height: height * 0.06,
		width: width * 0.7,
		paddingLeft: 10,
		borderWidth: 1,
		borderRadius: 10,
		fontSize: width * 0.05,
		paddingLeft: 10,
	},
	passwordView: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	password: {
		flex: 1,
		fontSize: width * 0.05,
	},
	icon: {
		marginRight: width * 0.03,
		height: height * 0.03,
		width: width * 0.05,
	},
	button: {
		marginTop: 10,
		backgroundColor: "blue",
		height: height * 0.06,
		width: width * 0.7,
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	loginText: {
		fontSize: width * 0.05,
		color: "white",
	},
});
