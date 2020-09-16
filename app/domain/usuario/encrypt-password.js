const bcrypt = require("bcryptjs");

module.exports = async (passowrd) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(passowrd, 10, (err, passowrdHashed) => {
            if (err) {
                reject(err);
            }

            resolve(passowrdHashed);
        });
    });
};
