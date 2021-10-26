import React from "react";
import {
	SET_VALUE,
	SEARCH_COUNTRY,
	GET_CAPITAL_WEATHER,
	SET_lOADING,
	RESET_DATA,
} from "../actionTypes";

const initialState = {
	country: "",
	capital: "",
	population: "",
	latlng: "",
	lat: "",
	lon: "",
	flag: "",
	temperature: "",
	weather_icons: [],
	wind_speed: "",
	precip: "",
	loading: false,
};

const weatherReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_VALUE: {
			const { field, value } = payload;
			return {
				...state,
				[field]: value,
			};
		}
		case SEARCH_COUNTRY: {
			return {
				...state,
				...payload,
			};
		}
		case GET_CAPITAL_WEATHER: {
			return {
				...state,
				...payload,
			};
		}
		case SET_lOADING: {
			const { loading } = payload;
			return {
				...state,
				loading,
			};
		}
		case RESET_DATA: {
			return {
				country: "",
				capital: "",
				population: "",
				latlng: "",
				lat: "",
				lon: "",
				flag: "",
				temperature: "",
				weather_icons: [],
				wind_speed: "",
				precip: "",
				loading: false,
			};
		}
		default: {
			return state;
		}
	}
};

export default weatherReducer;
