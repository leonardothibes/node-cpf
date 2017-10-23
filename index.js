'use strict';

const decorator = require('./lib/decorator'),
      validator = require('./lib/validator'),
      generator = require('./lib/generator');

exports.validate = validator.validate;
exports.isMaked  = decorator.isMaked;
exports.mask     = decorator.mask;
exports.unMask   = decorator.unMask;
exports.generate = generator.generate;
