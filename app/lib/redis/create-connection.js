const Redis = require("ioredis");
const { logger } = require("../logger");

/**
 * @function createConnection Cria conexão com Redis
 */
module.exports = () => {
    try {
        const redis = new Redis({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            connectTimeout: 500,
            keyPrefix: process.env.REDIS_KEY_PREFIX,
            password: process.env.REDIS_PASSWORD,
            retryStrategy: (times) => {
                const delay = Math.min(times * 50, 2000);
                logger(`Failed to connect on Redis ${times} times. Retrying in ${delay} seconds`)
                return delay;
            }
        });

        logger('Redis connected!');

        return redis;

    } catch (e) {
        logger(`Something wrong with Redis connection: ${e.message}`)
    }

}
