export const data = {
	labels: ["", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [20, 45, 28, 44, 80, 100],
			colors: [
				(opacity = 1) => "rgb(195, 155, 211 )",
				(opacity = 1) => "rgb(195, 155, 211 )",
				(opacity = 1) => "rgb(195, 155, 211 )",
				(opacity = 1) => "rgb(195, 155, 211 )",
				(opacity = 1) => "rgb(195, 155, 211 )",
				(opacity = 1) => "rgb(195, 155, 211 )",
			],
		},
	],
};

export const lineData = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [0, 20, 45, 28, 80, 100],
			color: (opacity = 1) => `rgb(52, 152, 219,${opacity})`,
		},
	],
};

export const progressData = {
	labels: ["Swim", "Bike", "Run"],
	data: [0.4, 0.6, 0.75],
	colors: ["rgb(230, 176, 170)", "rgb(141, 240, 94 )", "rgb(127, 179, 213)"],
};

export const pieData = [
	{
		name: "Seoul",
		population: 21500000,
		color: "rgba(125, 206, 160,1)",
		legendFontColor: "#808080",
		legendFontSize: 15,
	},
	{
		name: "Toronto",
		population: 5870000,
		color: "rgb(247, 220, 111  )",
		legendFontColor: "#808080",
		legendFontSize: 15,
	},
	{
		name: "Moscow",
		population: 11920000,
		color: "rgb(31, 97, 141)",
		legendFontColor: "#808080",
		legendFontSize: 15,
	},
];
