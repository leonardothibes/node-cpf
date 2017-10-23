'use strict';

/**
 * Aplica a máscara num CPF.
 *
 * @param {String} cpf
 *
 * @return {String}
 */
exports.mask = function(cpf)
{
    cpf = String(cpf);

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
    return String(cpf).replace(/(\.|\-)/g, '');
};
