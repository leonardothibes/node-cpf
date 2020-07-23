/**
 * Validação de CPF.
 *
 * @param cpf CPF com ou sem máscara
 */
export var validate: (cpf: string) => boolean;

/**
 * Verifica se um CPF está ou não com máscara.
 */
export var isMasked: (cpf: string) => boolean;

/**
 * Aplica a máscara num CPF.
 */
export var mask: (cpf: string) => string;

/**
 * Remove máscara de um CPF.
 */
export var unMask: (cpf: string) => string;

/**
 * Gera um CPF aleatório.
 *
 * @param masked Com máscara ou sem
 */
export var generate: (masked?: boolean) => string;
