# CPF [![npm](http://img.shields.io/npm/v/node-cpf.svg)](https://www.npmjs.com/package/node-cpf) ![Downloads](https://img.shields.io/npm/dm/node-cpf.svg) [![Build Status](https://secure.travis-ci.org/leonardothibes/node-cpf.png)](http://travis-ci.org/leonardothibes/node-cpf) [![Package Quality](http://npm.packagequality.com/shield/node-cpf.svg)](http://packagequality.com/#?package=node-cpf) [![License](https://img.shields.io/npm/l/node-cpf.svg)](LICENSE)

Funções utilitárias para tratamento de CPF.

Pague-me um café
----------------

Se este componente foi útil para você, ou para algum de seus projetos, por favor ajude a apoiar o meu trabalho clicando no botão abaixo e fazendo uma doação via PayPal:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LEYD9Y3VEMPK8&lc=BR&item_name=Leonardo%20Thibes&item_number=node%2dcpf&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Installation
------------

```bash
npm install node-cpf --save
```

Examples
--------

* [CPF Validation](#cpf-validation)
* [CPF Mask](#cpf-mask)
* [CPF UnMask](#cpf-unmask)
* [CPF is Masked](#cpf-is-masked)
* [Random CPF Generation](#random-cpf-generation)

CPF Validation
--------------

```js
const cpf = require('node-cpf');

cpf.validate('226.088.422-91'); // returns TRUE
cpf.validate('22608842291');    // returns TRUE

cpf.validate('11111111111'); // returns FALSE

```

CPF Mask
--------

```js
const cpf = require('node-cpf');

cpf.mask('22608842291'); // returns '226.088.422-91'

```

CPF UnMask
--------

```js
const cpf = require('node-cpf');

cpf.unMask('226.088.422-91'); // returns '22608842291'

```

CPF Is Masked
------------

```js
const cpf = require('node-cpf');

cpf.isMasked('226.088.422-91'); // returns TRUE
cpf.isMasked('22608842291');    // returns FALSE

```

Random CPF Generation
---------------------

```js
const cpf = require('node-cpf');

cpf.generate();     // returns a valid CPF without mask
cpf.generate(true); // returns a valid CPF with mask

```

Test and development
--------------------

* Install external dependencies: **``npm install``**
* Run the test suite without coverage: **``npm test``**
* Run the test suite with coverage: **``npm run testdox``**

How to Contribute
-----------------

* Open a pull request or an issue about what you want to implement / change. We're glad for any help!
* Please be aware that we'll only accept fully tested code.

Contributors
------------

 * **Leonardo Thibes <leonardothibes@gmail.com>**

LICENSE
=======

Copyright (c) 2017 Leonardo Thibes

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
