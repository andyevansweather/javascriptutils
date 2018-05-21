'use strict';

const fs = require('fs');
const uuidV4 = require('uuid/v4');
console.log('what is the filepath?');
console.log(__dirname);

function copyData(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log('what is the data?');
        console.log(data);

        let test = JSON.parse(data);

        test.forEach(item => {
            item.id = uuidV4();
        })

        data = JSON.stringify(test);
        // Do your processing, MD5, send a satellite to the moon, etc.
        fs.writeFile(savPath, data, function(err) {
            if (err) {
                throw err;
            }
            console.log('complete');
        });
    });
}

// Examples

// const destin = __dirname + '\\sitelistuuids.json';
// const source = __dirname + '\\sitelist.json';

// copyData(destin, source);
