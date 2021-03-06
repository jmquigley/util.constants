# util.constants

> General programming constants and regex strings

[![build](https://github.com/jmquigley/util.constants/workflows/build/badge.svg)](https://github.com/jmquigley/util.constants/actions)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.constants.svg)](https://www.npmjs.com/package/util.constants)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add util.constants
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview
This module contains reusable string/number constants and regex patterns.


## Constants

- `encoding` - the default string encoding value used for buffers (utf8)
- `failure` - exit code for failure representing the number 127
- `millisPerSecond` - the number of milliseconds in one second (1000)
- `nl` - Unix newline character string '\n'
- `sp` - zero width non breaking space character (unicode u+200b)
- `success` - exit code for success representing the number 0


## regex patterns

- `regexEmail` - matches [99.99% of all email](http://www.regular-expressions.info/email.html) addresses in use today
- `regexNumber` - matches a decimal number (e.g. 123, -123, -1.23)
- `regexURL` - matches a [Uniform Resource Locator (URL)](https://en.wikipedia.org/wiki/URL)
- `regexUUID` - matches a [universally unique id (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier)
