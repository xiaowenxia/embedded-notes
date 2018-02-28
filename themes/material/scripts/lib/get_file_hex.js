var fs = require('fs');
var crypto = require('crypto');


function getFileHexSync(filepath) {
    var buffer = fs.readFileSync(filepath);
    var fsHash = crypto.createHash('md5');

    fsHash.update(buffer);
    var sha384 = fsHash.digest('base64');
    return sha384;
}

module.exports = getFileHexSync