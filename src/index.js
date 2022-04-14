#!/usr/bin/env node
require('colors');
const inquirer = require('inquirer');
const options = require('./helpers/options');
const installEPHReact = require('./helpers/enquirer/installEPHReact');

const inquirerMenu = async () => {
	console.clear();
	console.log('===================================='.green);
	console.log('  Select one option'.green);
	console.log('====================================\n'.green);

	const { option } = await inquirer.prompt(options);

	return option;
};

const main = async () => {
	let opt;

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case 1:
				// react
				installEPHReact();
				opt = 0;
				break;

			case 2:
				// Todo
				// vue
				break;
		}
	} while (opt !== 0);
};

if (require.main === module) {
	main();
}
