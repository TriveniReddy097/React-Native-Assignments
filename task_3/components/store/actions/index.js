import axios from "axios";
import React from "react";
import {
	SET_VALUE,
	SEARCH_COUNTRY,
	GET_CAPITAL_WEATHER,
	SET_lOADING,
	RESET_DATA,
} from "../actionTypes";
import NavigationService from "../../../lib/NavigationService";

export const setValue = (field, value) => async (dispatch) => {
	dispatch({
		type: SET_VALUE,
		payload: {
			field,
			value,
		},
	});
};

export const searchCountry = (countryName) => async (dispatch) => {
	try {
		dispatch(toggleLoading(true));
		const res = await axios.get(
			`https://restcountries.eu/rest/v2/name/${countryName}`
		);
		const data = await res.data;
		const { capital, population, latlng, flag } = data;
		dispatch({
			type: SEARCH_COUNTRY,
			payload: {
				capital,
				population,
				latlng,
				flag,
			},
		});
		dispatch(toggleLoading(false));
		NavigationService.navigate("CountryScreen");
	} catch (err) {
		console.error(err);
	}
};

export const getCapitalWeather = (capitalName) => async (dispatch) => {
	try {
		dispatch(toggleLoading(true));
		const res = await axios.get(
			`http://api.weatherstack.com/current?access_key=2a4602f704dc130d15349c5577bb62de&query=${capitalName}`
		);
		const current = (await res.data.current) || {};
		console.log("current obj data :", current);
		const { temperature, weather_icons, wind_speed, precip } = current;
		// const temperature = current["temperature"];
		// const weather_icons = current["weather_icons"];
		// const wind_speed = current["wind_speed"];
		// const precip = current["precip"];
		console.log(temperature, wind_speed, weather_icons, precip);

		dispatch({
			type: GET_CAPITAL_WEATHER,
			payload: {
				temperature,
				weather_icons,
				wind_speed,
				precip,
			},
		});
		dispatch(toggleLoading(false));
		NavigationService.navigate("WeatherScreen");
	} catch (err) {
		console.error(err);
	}
};

export const resetData = () => async (dispatch) => {
	dispatch({
		type: RESET_DATA,
	});
};

const toggleLoading =
	(loading = false) =>
	async (dispatch) => {
		dispatch({
			type: SET_lOADING,
			payload: {
				loading,
			},
		});
	};
