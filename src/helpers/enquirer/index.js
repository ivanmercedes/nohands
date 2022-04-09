const inquirer = require("inquirer");
const initial = require("./questions/initial");

const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".green);
  console.log("  Select one option".green);
  console.log("====================================\n".green);

  const { option } = await inquirer.prompt(initial);

  return option;
};

module.exports = {
  inquirerMenu,
};
