'use strict';

const cpf    = require('../index'),
      assert = require('unit.js');

describe('Entry Point', function()
{
    it('Validate Masked Valid', function(done)
    {
        let valid = cpf.validate('821.649.079-81');
        assert.bool(valid).isTrue();
        done();
    });

    it('Validate Masked Invalid', function(done)
    {
        let valid = cpf.validate('821.649.079-82');
        assert.bool(valid).isFalse();
        done();
    });

    it('Validate UnMasked Valid', function(done)
    {
        let valid = cpf.validate('82164907981');
        assert.bool(valid).isTrue();
        done();
    });

    it('Validate UnMasked Invalid', function(done)
    {
        let valid = cpf.validate('82164907982');
        assert.bool(valid).isFalse();
        done();
    });

    it('Is Masked', function(done)
    {
        let valid = cpf.isMasked('821.649.079-81');
        assert.bool(valid).isTrue();
        done();
    });

    it('Is UnMasked', function(done)
    {
        let valid = cpf.isMasked('82164907981');
        assert.bool(valid).isFalse();
        done();
    });

    it('Mask', function(done)
    {
        let masked = cpf.mask('23202006223');
        assert.string(masked).isEqualTo('232.020.062-23');
        done();
    });

    it('UnMask', function(done)
    {
        let unMasked = cpf.unMask('232.020.062-23');
        assert.string(unMasked).isEqualTo('23202006223');
        done();
    });

    it('Generate UnMasked', function(done)
    {
        let generated = cpf.generate();
        assert.bool(cpf.validate(generated)).isTrue();
        done();
    });

    it('Generate Masked', function(done)
    {
        let generated = cpf.generate(true);
        let isMasked  = new RegExp(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/);

        assert.bool(cpf.validate(generated)).isTrue();
        assert.bool(isMasked.test(generated)).isTrue();

        done();
    });
});
