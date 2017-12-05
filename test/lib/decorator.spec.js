'use strict';

const decorator = require('../../lib/decorator'),
      assert    = require('unit.js');

const cpfs = [
    {
        unMasked: '12345678912',
        masked  : '123.456.789-12',
    },
    {
        unMasked: '   12345678912',
        masked  : '   123.456.789-12',
    },
    {
        unMasked: '12345678912   ',
        masked  : '123.456.789-12   ',
    },
    {
        unMasked: '   12345678912   ',
        masked  : '   123.456.789-12   ',
    },
];

describe('Decorator', function()
{
    cpfs.forEach(function(cpf)
    {
        it('Is Masked: ' + cpf.masked, function(done)
        {
            assert.bool(decorator.isMasked(cpf.masked)).isTrue();
            done();
        });

        it('Is UnMasked: ' + cpf.unMasked, function(done)
        {
            assert.bool(decorator.isMasked(cpf.unMasked)).isFalse();
            done();
        });

        it('Mask String', function(done)
        {
            assert.string(decorator.mask(cpf.unMasked)).isEqualTo(cpf.masked.trim());
            done();
        });

        it('Mask Number', function(done)
        {
            assert.string(decorator.mask(12345678912)).isEqualTo(cpf.masked.trim());
            done();
        });

        it('Mask Fail', function(done)
        {
            assert.string(decorator.mask('123')).isEqualTo('123');
            done();
        });

        it('UnMask Masked', function(done)
        {
            assert.string(decorator.unMask(cpf.masked)).isEqualTo(cpf.unMasked.trim());
            done();
        });

        it('UnMask UnMasked', function(done)
        {
            assert.string(decorator.unMask(cpf.unMasked)).isEqualTo(cpf.unMasked.trim());
            done();
        });
    });
});
