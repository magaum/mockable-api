const CircuitBreaker = require("opossum");

const options = {
    timeout: 1000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
}

/**
 * @param {Function} functionToFire Função que pode gerar erro
 */
exports.circuitBreaker = (functionToFire) => new CircuitBreaker(functionToFire, options);
