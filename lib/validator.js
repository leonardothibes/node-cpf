'use strict';

const decorator = require('./decorator');

/**
 * Validação de CPF.
 *
 * @param {String} cpf
 *
 * @return {Bool}
 */
exports.validate = function(cpf)
{
    if (!cpf) {
        return false;
    }

    // Removendo a máscara.
    cpf = decorator.unMask(cpf);

    // Elimina CPFs invalidos conhecidos.
    if (
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999'
    ) {
        return false;
    }
    // Elimina CPFs invalidos conhecidos.

    var add = 0;
    var rev = 0;
    var i   = 0;

    // Valida 1o digito.
    add = 0;
    for (i = 0; i < 9; i ++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(9))) {
        return false;
    }
    // Valida 1o digito.

    // Valida 2o digito.
    add = 0;
    for (i = 0; i < 10; i ++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(10))) {
        return false;
    }
    // Valida 2o digito.

    return true;
};
