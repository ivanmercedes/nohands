const options = [
	{
		type: 'list',
		name: 'option',
		message: 'What would you like to do?',
		choices: [
			{
				value: 1,
				name: `${`1.`.green} Install Prettier and Eslint in React App`,
			},
			// TODO
			// {
			//   value: 2,
			//   name: `${`2.`.green} Create folder structure`,
			// },
			{
				value: 0,
				name: `${`0.`.green} exit`,
			},
		],
	},
];

module.exports = options;
