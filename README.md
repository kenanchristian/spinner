<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://s3.eu-central-1.amazonaws.com/bersling/images/spinner3.gif">
  <h1 align="center">@tsmean/spinner</h1>
</p>

A library to display loading spinners working seamlessly with Angular 2, 4, 5 and 6. ([http://spinner.tsmean.com](http://spinner.tsmean.com))

[![Build Status](https://travis-ci.org/tsmean/spinner.svg?branch=master)](https://travis-ci.org/tsmean/spinner)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://spinner.tsmean.com)
[![npm](https://img.shields.io/npm/v/%40tsmean/spinner.svg)][npm-url]
[![Support](https://img.shields.io/badge/Support-Angular2-blue.svg)]()
[![Support](https://img.shields.io/badge/Support-Angular4-blue.svg)]()
[![Support](https://img.shields.io/badge/Support-Angular5-blue.svg)]()
[![Support](https://img.shields.io/badge/Support-Angular6-blue.svg)]()


## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Versioning](#versioning)
- [License](#license)

## Demo

[Working Demo](http://spinner.tsmean.com)

or edit directly Stackblitz:

https://stackblitz.com/edit/tsmean-spinner

## Installation

`@tsmean/spinner` is available via [npm][npm-url].

Using npm:
```bash
$ npm install @tsmean/spinner
```

Using yarn:
```bash
$ yarn add @tsmean/spinner
```

## Usage

Import `SpinnerModule` in  in the root module(`AppModule`):
```typescript
// Import library module
import { SpinnerModule } from '@tsmean/spinner';

@NgModule({
  imports: [
    // ...
    SpinnerModule.forRoot({
      primaryColor: '#ff0000',
      secondaryColor: '#00ff00',
      animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
    })
  ]
})
export class AppModule { }
```
Then use the spinner either in block format
```html
<spinner></spinner>
```

or inline
```html
<spinner [display]="inline"></spinner>
```

There are many options more to customize the spinner, for a full reference please visit 
http://spinner.tsmean.com/.


## Browser Support

![Chrome](http://icons.iconarchive.com/icons/google/chrome/48/Google-Chrome-icon.png) | ![Firefox](https://support.cdn.mozilla.net/static/sumo/img/favicon.ico) | ![IE](https://www.msccruises.co.uk/wcsstore/MSCB2CStoreFrontAssetStore//images/icon_ie.png) | ![Safari](https://aplweb.sercomtel.com.br/sistemas/areaCliente/img/logoSafari.png) | ![Opera](https://www.webcomponents.org/assets/opera.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | Latest ✔ |

## Versioning

@tsmean/spinner is maintained with the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.


## License

#### The MIT License (MIT)



# @tsmean/spinner

A customizable yet simple library for loading spinners working for Angular 2, Angular 4, Angular 5 and Angular 6. Here's one out of many ways how you could make it look like:

<img height="100" width="100" src="https://s3.eu-central-1.amazonaws.com/bersling/images/spinner3.gif">

## Installation & Demo

The spinner library is best demonstrated in a small Angular app:



[npm-url]: https://www.npmjs.com/package/@tsmean/spinner
