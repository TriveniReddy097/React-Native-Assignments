import React from "react";
import axios from "axios";
import NavigationService from "../../lib/NavigationService";
import {
	SET_ASTEROID_ID,
	SERACH_ASTEROID_ID,
	SET_LOADING,
	RESET_ASTEROID,
} from "../actionTypes";

export const setAsteroidID = (field, value) => async (dispatch) => {
	dispatch({
		type: SET_ASTEROID_ID,
		payload: {
			field,
			value,
		},
	});
};

export const searchAstroidID = (id) => async (dispatch) => {
	try {
		dispatch(toggleLoading(true));
		const res = await axios.get(
			`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=ZyY9XDwQmg4aCcKqoi4zDkmHDA3hVccgYF6Rm0bb`
		);
		// console.log(res.data);
		const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } =
			await res.data;
		dispatch({
			type: SERACH_ASTEROID_ID,
			payload: {
				name,
				nasa_jpl_url,
				is_potentially_hazardous_asteroid,
			},
		});
		dispatch(toggleLoading(false));
		NavigationService.navigate("AsteroidInfo");
	} catch (err) {
		console.error(err);
	}
};

export const searchRandomID = () => async (dispatch) => {
	try {
		dispatch(toggleLoading(true));
		const res = await axios.get(
			"https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ZyY9XDwQmg4aCcKqoi4zDkmHDA3hVccgYF6Rm0bb"
		);
		const { near_earth_objects } = (await res.data) || [];
		const randomObj =
			near_earth_objects[Math.floor(Math.random() * near_earth_objects.length)];
		dispatch(setAsteroidID("asteroidId", randomObj.id));
		dispatch(searchAstroidID(randomObj.id));
		dispatch(toggleLoading(false));
	} catch (err) {
		console.error(err);
	}
};

export const restAsteroid = () => async (dispatch) => {
	dispatch({
		type: RESET_ASTEROID,
	});
};

const toggleLoading =
	(loading = false) =>
	async (dispatch) => {
		dispatch({
			type: SET_LOADING,
			payload: {
				loading,
			},
		});
	};
