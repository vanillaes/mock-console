<h1 align="center">Mock-Console</h1>

Mock-Console is a small ES module implementation of a console mock. It allows enabling, disabling, and capturing the output of the built-in console methods.

<div align="center">
  <a href="https://github.com/vanillaes/mock-console/releases"><img src="https://badgen.net/github/tag/vanillaes/mock-console" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/mock-console"><img src="https://badgen.net/npm/v/@vanillaes/mock-console" alt="NPM Release"></a>
  <a href="https://bundlephobia.com/result?p=@vanillaes/mock-console"><img src="https://badgen.net/bundlephobia/minzip/@vanillaes/mock-console" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillaes/mock-console/actions"><img src="https://github.com/vanillaes/mock-console/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/mock-console/actions"><img src="https://github.com/vanillaes/mock-console/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Features

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible

## Installation

```sh
npm install @vanillaes/mock-console
```

```javascript
import MockConsole from '@vanillaes/mock-console';
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
const { MockConsole } = require('@vanillaes/mock-console');
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.