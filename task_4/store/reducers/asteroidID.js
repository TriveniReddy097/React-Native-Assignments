import {
	SET_ASTEROID_ID,
	SERACH_ASTEROID_ID,
	SET_LOADING,
	RESET_ASTEROID,
} from "../actionTypes";

const initialState = {
	asteroidId: "",
	name: "",
	nasa_jpl_url: "",
	is_potentially_hazardous_asteroid: false,
	loading: false,
};

const asteroidID = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ASTEROID_ID: {
			const { field, value } = payload;
			return {
				...state,
				[field]: value,
			};
		}
		case SERACH_ASTEROID_ID: {
			// const { name, nasa_jpl, is_potentially_hazardous_asteroid } = payload;
			return {
				...state,
				// name,
				// nasa_jpl,
				// is_potentially_hazardous_asteroid,
				...payload,
			};
		}
		case SET_LOADING: {
			const { loading } = payload;
			return {
				...state,
				loading,
			};
		}
		case RESET_ASTEROID: {
			return {
				asteroidId: "",
				name: "",
				nasa_jpl_url: "",
				is_potentially_hazardous_asteroid: false,
				loading: false,
			};
		}
		default:
			return state;
	}
};

export default asteroidID;
