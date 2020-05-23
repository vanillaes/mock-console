<h1 align="center">Mock-Console-ES</h1>

Mock-Console-ES is a small ES module implementation of a console mock. It allows enabling, disabling, and capturing the output of the built-in console methods.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/mock-console-es)](https://github.com/vanillaes/mock-console-es/releases)
[![NPM Release](https://badgen.net/npm/v/mock-console-es)](https://www.npmjs.com/package/mock-console-es)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/mock-console-es)](https://bundlephobia.com/result?p=mock-console-es)
[![MIT License](https://badgen.net/github/license/vanillaes/mock-console-es)](https://raw.githubusercontent.com/vanillaes/mock-console-es/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/mock-console-es/workflows/Latest/badge.svg)](https://github.com/vanillaes/mock-console-es/actions)
[![Release Status](https://github.com/vanillaes/mock-console-es/workflows/Release/badge.svg)](https://github.com/vanillaes/mock-console-es/actions)

## Features

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible

## Installation

```sh
npm install mock-console-es
```

```javascript
import MockConsole from 'mock-console-es';
```

## Usage

### Creation

```const logger = new MockConsole()```

*Note: The mock is a singleton. Every time `new` is called on the mock it'll return the same instance*

### MockConsole.disable()

Disables the built-in console methods (ie `log`, `info`, `error`)

```javascript
const logger = new MockConsole();
logger.disable();
console.log('This will NOT print to the console');
```

### MockConsole.restore()

Restores the built-in console methods after they've been disabled

```javascript
const logger = new MockConsole();
logger.disable();
console.log('This will NOT print to the console');
logger.restore();
console.log('This WILL print to the console');
> This WILL print to the console
```

### MockConsole.capture()

Capture is used to store the console output so it can be retrieved later for testing

```javascript
const logger = new MockConsole();
logger.capture();
console.log('This message will be captured');
logger.restore();
console.log(logger.logs);
> [ 'This message will be captured' ]
```

Captured logs are stored in an array
- `console.log` -> `MockConsole.logs[]`
- `console.info` -> `MockConsole.infos[]`
- `console.error` -> `MockConsole.errors[]`

### MockConsole.flush()

Flush removes all previously captured logs

```javascript
const logger = new MockConsole();
logger.capture();
console.log('This message will be captured');
logger.restore();
console.log(logger.logs);
> [ 'This message will be captured' ]
logger.flush();
console.log(logger.logs);
> []
```

## CommonJS

A `.cjs` bundle is included for CommonJS compatibility 

```javascript
const { MockConsole } = require('mock-console-es');
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.