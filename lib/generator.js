'use strict';

const shuffle   = require('shuffle-list'),
      decorator = require('./decorator');

/**
 * Gera um CPF aleatório.
 *
 * @param {Bool} masked Flag que indica se o CPF será gerado com ou sem máscara.
 *
 * @return {String}
 */
exports.generate = function(masked)
{
    const numbers   = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join('').substring(0, 9);
    const generated = numbers + calcDigits(numbers.split(''));

    return masked ? decorator.mask(generated) : generated;
};

/**
 * Calcula os dois dígitos verificadores.
 *
 * @param {String} cpf Número CPF sem os dígitos.
 *
 * @return {String}
 */
function calcDigits(cpf)
{
    cpf = cpf.reverse();

    var v1 = 0;
    var v2 = 0;

    for (var i = 0; i < 9; i++) {
        v1 = v1 + cpf[i] * (9 - (i % 10));
        v2 = v2 + cpf[i] * (9 - ((i + 1) % 10));
    }

    v1 = (v1 % 11) % 10;
    v2 = ((v2 + v1 * 9) % 11) % 10;

    return v1 + '' + v2;
}
