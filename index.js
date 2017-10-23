'use strict';

const decorator = require('decorator'),
      validator = require('validator');

exports.validate = validator.isValid;
exports.mask     = decorator.mask;
exports.unMask   = decorator.unMask;
