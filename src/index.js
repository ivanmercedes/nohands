const { Input, inquirerMenu, pause } = require("../helpers/enquirer");

const main = async () => {
  let opt;

  do {
    opt = await inquirerMenu();
    console.log(opt)
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
};

main();

// function hello(name = "Ivan") {
//   return `Hello, ${name}`;
// }

// export default hello;
