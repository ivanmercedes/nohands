# NoHand cli tool 🚀

Save time configuring ESLint and Prettier on react with this tool you can do it very simply and easily, using only one command without having to configure files manually

## usage

```
# -- Navigate to the dir  project
cd project

# -- And run!
npx nohands
```

## ESLint and Prettier 🛠️

Content of configuration files

**.eslintignore**

```
build/*
!build/index.js
```

**.prettierignore**

```
build
package-lock.json
tailwind.config.js
```

**Rules and extended config**

```
rule:{
  ...
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
}
```

```
extend:[
    ...
    "eslint-config-prettier"
]
```

## Features ✨

- Install eslint and prettier zero manual config

## TODO 👨‍💻

- [ ] Add Husky
- [ ] Add test
- [ ] Refactoring to typescript
