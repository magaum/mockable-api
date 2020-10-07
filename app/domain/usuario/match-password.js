const bcrypt = require("bcryptjs");

module.exports = async (passowrd, passowrdHashed) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(passowrd, passowrdHashed, (err, match) => {
            if (err) {
                reject(err);
            }
            resolve(match);
        })
    });
}
