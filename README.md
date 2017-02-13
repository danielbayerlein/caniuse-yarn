# caniuse-yarn

[![npm version](https://badge.fury.io/js/%40danielbayerlein%2Fcaniuse-yarn.svg)](https://badge.fury.io/js/%40danielbayerlein%2Fcaniuse-yarn)
[![Build Status](https://travis-ci.org/danielbayerlein/caniuse-yarn.svg?branch=master)](https://travis-ci.org/danielbayerlein/caniuse-yarn)
[![codecov](https://codecov.io/gh/danielbayerlein/caniuse-yarn/branch/master/graph/badge.svg)](https://codecov.io/gh/danielbayerlein/caniuse-yarn)

**caniuse-yarn** checks if [Yarn](https://github.com/yarnpkg/yarn) is available.

## Installation

### Library

```bash
# npm
npm install @danielbayerlein/caniuse-yarn --save

# Yarn
yarn add @danielbayerlein/caniuse-yarn
```

### CLI

```bash
# npm
npm install @danielbayerlein/caniuse-yarn --global

# Yarn
yarn global add @danielbayerlein/caniuse-yarn
```

## Usage

### Library

```javascript
const caniuseYarn = require('@danielbayerlein/caniuse-yarn')();
console.log(caniuseYarn ? 'Yes' : 'No');
```

### CLI

```bash
caniuse-yarn
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new [Pull Request](../../pull/new/master)

## Copyright

Copyright (c) 2016-2017 Daniel Bayerlein. See [LICENSE](./LICENSE.md) for details.
