const fs = require("fs");
const execSync = require("child_process").execSync;

const installEslintPrettierHusky = () => {
  // console.log("Adding devDependencies...");
  const packageFile = require(process.cwd() + "/package.json");
  const template = require("../../template.json");

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
    function writeJSON(err) {
      try {
        // console.log("instaling devpencies...");
        execSync("npm i", { stdio: "inherit" });
      } catch (error) {
        console.log(error.red);
      }
      // console.log("devDepencies added successfully");

      try {
        execSync("npx eslint --init", { stdio: "inherit" });
      } catch (e) {
        console.log(e);
      }

      updateEslintConfig();
      createIgnores();
    },
  );
};

function createIgnores() {
  // eslint ignore
  fs.writeFile(
    process.cwd() + "/.eslintignore",
    `build/*\n!build/index.js`,
    function (err) {
      if (err) console.log(err.red);
      console.log(".eslintignore added successfully.".green);
    },
  );

  // prettier ignore
  fs.writeFile(
    process.cwd() + "/.prettierignore",
    `build\npackage-lock.json\ntailwind.config.js`,
    function (err) {
      if (err) console.log(err.red);
      console.log(".prettierignore added successfully.".green);
    },
  );
}

function updateEslintConfig() {
  const eslintRcFile = require(process.cwd() + "/.eslintrc.js");

  // console.log("Adding eslint-config-prettier extend.");
  eslintRcFile.extends = [...eslintRcFile.extends, "eslint-config-prettier"];
  // console.log("Adding react eslint rules...");
  eslintRcFile.rules = {
    ...eslintRcFile.rules,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  };

  fs.writeFile(
    process.cwd() + "/.eslintrc.js",
    `module.exports = ${JSON.stringify(eslintRcFile, null, 4)}`,
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log("eslintrc successfully update".green);
    },
  );
}

module.exports = installEslintPrettierHusky;
