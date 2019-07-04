# cardscript-examples

[![Tymly Cardscript](https://img.shields.io/badge/tymly-cardscript-blue.svg)](https://tymly.io/)
[![CircleCI](https://circleci.com/gh/wmfs/cardscript-examples.svg?style=svg)](https://circleci.com/gh/wmfs/cardscript-examples)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/cardscript-examples.svg)](https://www.npmjs.com/package/@wmfs/cardscript-examples) 
[![codecov](https://codecov.io/gh/wmfs/cardscript-examples/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/cardscript-examples) 
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/cardscript-examples/badge)](https://www.codefactor.io/repository/github/wmfs/cardscript-examples) 
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/concrete-paths/LICENSE)

> Example Cardscript JSON files, to help with testing and documentation. Includes loader utility.

* Note: files

## <a name="install"></a>Install
```bash
$ npm install cardscript-schema --save
```

## <a name="usage"></a>Usage

```javascript
const exampleLoader = require('@wmfs/cardscript-examples')

// Loads an example from the /lib/fixtures dir.
// Param is name of JSON file, without .json

const simpleFormExample = exampleLoader('simple-form')

```

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/cardscript/blob/master/LICENSE)
