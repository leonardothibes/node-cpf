'use strict';

const generator = require('../../lib/generator'),
      validator = require('../../lib/validator'),
      assert    = require('unit.js');

describe('Generator', function()
{
    it('Generate UnMasked', function(done)
    {
        let generated = generator.generate();
        assert.bool(validator.validate(generated)).isTrue();
        done();
    });

    it('Generate Masked', function(done)
    {
        let generated = generator.generate(true);
        let isMasked  = new RegExp(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/);

        assert.bool(validator.validate(generated)).isTrue();
        assert.bool(isMasked.test(generated)).isTrue();

        done();
    });
});
