'use strict';

const validator = require('../../lib/validator'),
      assert    = require('unit.js');

const invalid = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678912',
    '60999069838',
    '06489857333',
    '34972733927',
    '',
];

const valid = [
    '09633427207',
    '096.334.272-07',
    '195.928.827-03',
    '19592882703',
    '345.672.513-26',
    '34567251326',
    '981.696.160-18',
];

describe('Validator', function()
{
    invalid.forEach(function(cpf)
    {
        it('Invalid: ' + cpf, function(done)
        {
            assert.bool(validator.validate(cpf)).isFalse();
            done();
        });
    });

    valid.forEach(function(cpf)
    {
        it('Valid: ' + cpf, function(done)
        {
            assert.bool(validator.validate(cpf)).isTrue();
            done();
        });
    });
});
