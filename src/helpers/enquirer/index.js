const inquirer = require("inquirer");
const initial = require("./questions/initial");

const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".green);
  console.log("  Seleccione una opcion".green);
  console.log("====================================\n".green);

  const { option } = await inquirer.prompt(initial);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${`enter`.green} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

const Input = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  Input,
};
