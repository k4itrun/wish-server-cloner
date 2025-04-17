<div align="center">

<img src=".github/assets/wish.png" width=100 alt="Wish Cloner"/><br/>

# [@Wish Cloner](https://github.com/k4itrun/wish-server-cloner)

Wish server cloner is an app that will generally help you completely with the cloning of your favourite server.

</div>

<div align="center">
  <a aria-label="GitHub License" href="https://github.com/k4itrun/wish-server-cloner/blob/master/license.md">
    <img src="https://img.shields.io/github/license/k4itrun/k4itrun?color=%23e3aef0&logo=github&style=flat-square&label=License">
  </a>
  <a aria-label="Version" href="https://github.com/k4itrun/wish-server-cloner/releases">
    <img src="https://img.shields.io/github/v/release/k4itrun/wish-server-cloner?color=%23e3aef0&logo=github&style=flat-square&label=Version">
  </a>
  <a aria-label="Discord" href="https://discord.gg/A6Vu7gYE">
    <img src="https://img.shields.io/discord/903684797560397915?color=%23e3aef0&logo=discord&style=flat-square&logoColor=fff&label=Discord">
  </a>
</div>

---

## Some online tools (Just for more security)

<div>
  <a href="https://shell.cloud.google.com/cloudshell/open?cloudshell_git_repo=https://github.com/wishware/wish-server-cloner.git&tutorial=README.md">
    <img alt="Run on Google Cloud Shell" src="https://gstatic.com/cloudssh/images/open-btn.svg" height="30"/>
  </a><br/>
  <a href="https://glitch.com/edit/#!/import/github/wishware/wish-server-cloner">
    <img alt="Remix on Glitch" src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" height="30"/>
  </a><br/>
  <a href="https://repl.it/github/wishware/wish-server-cloner">
    <img alt="Run on Repl.it" src="https://repl.it/badge/github/k4itrun/wish-server-cloner" height="40"/>
  </a><br/>
  <a href="https://codesandbox.io/p/github/wishware/wish-server-cloner">
    <img alt="Run on CodeSandbox" src="https://user-images.githubusercontent.com/1863771/68405395-5020f400-0180-11ea-8818-8cb255d9fe71.png" height="44"/>
  </a>
</div>

**Steps:**

- Go to [Replit](https://repl.it/github/k4itrun/wish-server-cloner) and click `Import from GitHub`
- Search for your [account token](#how-to-take-my-token-my-account-token) in the browser
- On Replit, press the `Run` button and wait for the application to launch
- Just follow the prompts in the CLI, and everything will be set up!

## Installation

- Get the most recent version of Node.js from [this link](https://nodejs.org/en/download/) and proceed with the installation
- Clone this repository or [download it as a ZIP](https://github.com/k4itrun/wish-server-cloner/archive/refs/heads/main.zip)
- Locate the downloaded `.zip` file and unzip it
- Open your terminal in the extracted folder (On Windows, press `Win` + `R`, type `cmd`, then use `cd` and drag the folder into the terminal)
- Install the required packages by running either `npm install` or `pnpm install`
- Search for your [account token](#how-to-take-my-token-my-account-token) in the browser
- Just follow the prompts in the CLI, and everything will be set up!

## How to take my token (My account token)

- Login to Discord from chrome browser, brave, microsoft edge, forefox, etc...
- Use the key combination inside discord from the browser `Ctrl` + `Shift` + `i` (The idea is to enter the development console on the browser).
- Now copy this script in the console:

```js
const modules = [];

webpackChunkdiscord_app.push([
  [''],
  {},
  (e) => {
    for (const key in e.c) {
      if (Object.prototype.hasOwnProperty.call(e.c, key)) {
        modules.push(e.c[key]);
      }
    }
  },
]);

const token = modules
  .find((m) => m?.exports?.default?.getToken !== undefined)
  ?.exports?.default?.getToken?.();

console.log(token);
```

- This should bring up your Discord token

## Issues

If you run into any issues or have ideas on how to improve this project, feel free to open a [new issue](https://github.com/k4itrun/wish-server-cloner/issues) and provide a clear and detailed explanation.

## Pull Requests

Want to contribute? Great! Please follow these steps:

- Clone [this repository](https://github.com/k4itrun/wish-server-cloner) `https://github.com/k4itrun/wish-server-cloner.git`
- Create a new branch off of `main` with a descriptive name (e.g., `my-awesome-new-feature`).
- Submit a [pull request](https://github.com/k4itrun/wish-server-cloner/pulls) via [GitHub](https://github.com/) and explain what changes you’ve made and why.

## License

This project uses the MIT license. You can find the full license details in the [LICENSE](https://github.com/k4itrun/wish-server-cloner/blob/master/license.md) file.

## Contact

For any inquiries or support, you can reach out via [billoneta@proto.me](mailto:billoneta@proto.me) or join our [Discord Server](https://discord.gg/A6Vu7gYE).
