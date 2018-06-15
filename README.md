<p align="center">
  <img src="./w3tec-logo.png" alt="w3tec" width="400" />
</p>

<h1 align="center">Vue.js Plugin - Logdown</h1>

<p align="center"></p>

<p align="center">
  <b>A simple plugin for logging with <a href="http://caiogondim.github.io/logdown.js/">logdown.js</a>.</b></br>
  <sub>Made with ❤️ by <a href="https://github.com/w3tecch">w3tech</a> and <a href="https://github.com/w3tecch/vue-example-app/graphs/contributors">contributors</a></sub>
</p>

<br />

![divider](./w3tec-divider.png)

## ❯ Why

A Vue JS wrapper around [logdown.js](http://caiogondim.github.io/logdown.js/). Developed for Vue 2.

![divider](./w3tec-divider.png)

## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [License](#-license)

## ❯ Getting Started

Install using npm:

```bash
$ npm install vue-logdown
```

Import and register Vue plugin:

```js
import Vue from 'vue';
import VueLogdown from 'vue-logdown';

Vue.use(VueLogdown);
```

Or add some [logdown options](https://github.com/caiogondim/logdown.js?files=1#options)

```js
...
Vue.use(VueLogdown, {
  markdown: true,
});
```

![divider](./w3tec-divider.png)

## ❯ License

[MIT](/LICENSE)
