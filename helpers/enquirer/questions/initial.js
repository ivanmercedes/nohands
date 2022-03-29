require("colors");

const initial = [
  {
    type: "list",
    name: "option",
    message: "Que desea hacer?",
    choices: [
      {
        value: 1,
        name: `${`1.`.green} Instalar Prettier, Eslint & Husky`,
      },
      {
        value: 2,
        name: `${`2.`.green} Crear estructura de carpertas`,
      },
      {
        value: 0,
        name: `${`0.`.green} Salir`,
      },
    ],
  },
];

module.exports = initial;
