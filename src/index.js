#!/usr/bin/env node
const { inquirerMenu } = require("../src/helpers/enquirer");
const installEslintPrettierHusky = require("./helpers/enquirer/installEslintPrettierHusky");

const main = async () => {
  let opt;

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        // react
        installEslintPrettierHusky();
        opt = 0;
        break;

      case 2:
        // Todo
        // vue
        break;
    }
  } while (opt !== 0);
  console.clear();
};

if (require.main === module) {
  main();
}
