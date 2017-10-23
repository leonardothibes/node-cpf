'use strict';

const decorator = require('../../lib/decorator'),
      assert    = require('unit.js');

describe('Decorator', function()
{
    it('Is Masked', function(done)
    {
        assert.bool(decorator.isMaked('123.456.789-12')).isTrue();
        done();
    });

    it('Is UnMasked', function(done)
    {
        assert.bool(decorator.isMaked('12345678912')).isFalse();
        done();
    });

    it('Mask String', function(done)
    {
        assert.string(decorator.mask('12345678912')).isEqualTo('123.456.789-12');
        done();
    });

    it('Mask Number', function(done)
    {
        assert.string(decorator.mask(12345678912)).isEqualTo('123.456.789-12');
        done();
    });

    it('Mask Fail', function(done)
    {
        assert.string(decorator.mask('123')).isEqualTo('123');
        done();
    });

    it('UnMask Masked', function(done)
    {
        assert.string(decorator.unMask('123.456.789-12')).isEqualTo('12345678912');
        done();
    });

    it('UnMask UnMasked', function(done)
    {
        assert.string(decorator.unMask('12345678912')).isEqualTo('12345678912');
        done();
    });
});
