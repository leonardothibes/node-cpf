'use strict';

/**
 * Verifica se um CPF está ou não com máscara.
 *
 * @param {String} cpf
 *
 * @return {Bool}
 */
exports.isMasked = function(cpf)
{
    cpf = String(cpf).trim();

    return RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/).test(cpf);
};

/**
 * Aplica a máscara num CPF.
 *
 * @param {String} cpf
 *
 * @return {String}
 */
exports.mask = function(cpf)
{
    cpf = String(cpf).trim();

    if (cpf.length !== 11) {
        return cpf;
    }

    return cpf.substring(0, 3) + '.' +
           cpf.substring(3, 6) + '.' +
           cpf.substring(6, 9) + '-' +
           cpf.substring(9, 11);
};

/**
 * Remove máscara de um CPF.
 *
 * @param {String} cpf
 *
 * @return {String}
 */
exports.unMask = function(cpf)
{
    cpf = String(cpf).trim();

    return cpf.replace(/(\.|\-)/g, '');
};
