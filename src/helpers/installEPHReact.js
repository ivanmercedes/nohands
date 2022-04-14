const fs = require("fs");
const path = require("path");
// const execSync = require('child_process').execSync;

const installEPHReact = () => {
  console.log("=== Adding devDependencies ===".green);
  const packageFile = require(process.cwd() + "/package.json");
  const template = require("./template.json");

  packageFile.devDependencies = {
    ...packageFile.devDependencies,
    ...template.devDependencies,
  };

  packageFile.scripts = {
    ...packageFile.scripts,
    ...template.scripts,
  };

  fs.writeFile(
    process.cwd() + "/package.json",
    JSON.stringify(packageFile, null, 4),
    function (_err) {
      if (_err) console.log(_err);
      try {
        // execSync('npm i', { stdio: 'inherit' });
        copyConfigToDirectory();
      } catch (error) {
        console.log(error.red);
      }
    },
  );
};

function copyConfigToDirectory() {
  fs.copyFile(
    path.join(__dirname, "/../Stubs/eslintignore.stub"),
    process.cwd() + "/.eslintignore",
    (err) => {
      if (err) throw err;
      console.log("✅ eslintignore created successfully ");
    },
  );
  fs.copyFile(
    path.join(__dirname, "/../Stubs/eslintrc.stub"),
    process.cwd() + "/.eslintrc.js",
    (err) => {
      if (err) throw err;
      console.log("✅ eslintrc created successfully ");
    },
  );
  fs.copyFile(
    path.join(__dirname, "/../Stubs/prettierignore.stub"),
    process.cwd() + "/.prettierignore",
    (err) => {
      if (err) throw err;
      console.log("✅ prettierignore created successfully ");
    },
  );
  fs.copyFile(
    path.join(__dirname, "/../Stubs/prettierrc.stub"),
    process.cwd() + "/.prettierrc",
    (err) => {
      if (err) throw err;
      console.log("✅ prettierrc created successfully ");
    },
  );
}

module.exports = installEPHReact;
