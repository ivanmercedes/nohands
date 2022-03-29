#!/usr/bin/env node
const { Input, inquirerMenu, pause } = require("../src/helpers/enquirer");

const main = async () => {
  let opt;

  do {
    opt = await inquirerMenu();
    console.log(opt);
    switch (opt) {
      case 1:
        console.log("caca");
        const term = await Input("Opciones: ");

        console.log(term);
        break;

      case 2:
        console.log("react");
        break;
    }

    if (opt !== 0) await pause();
  } while (opt !== 0);
  console.clear();
};

if (require.main === module) {
  main();
}
