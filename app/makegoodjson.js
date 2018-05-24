'use strict';

const fs = require('fs');
console.log('what is the filepath?');
console.log(__dirname);

var dataToConvert = [{name: "Andy's List", beachLists: ['a3a8fc31-d562-49df-96bf-adb989b7ebd4'], emailAddresses: ['testemail@test.ac.uk', 'testemail@test.ac.uk', 'testemail@test.ac.uk']}, {name: "Matt's List", beachLists: ['4e280afb-e337-4412-87b3-2e433ef20903', 'a033d1fc-59ff-42d5-845e-d8afe337974e', 'a8981f93-f02b-4c9c-846f-a3cf284012b2'], emailAddresses: ['testemail@test.ac.uk']}, {name: "Rowan's List", beachLists: ['7ebbb832-4b2c-4266-a8d0-37c01b4aa220', '48b8256c-1320-400f-b724-4c40425b9671', '3ae61500-5c43-4d0a-bc84-3b5825e947c5', 'b7e16989-1524-4139-959a-61a52102a478'], emailAddresses: ['testemail@test.ac.uk', 'testemail@test.ac.uk']}, {name: 'Another New List', beachLists: ['d2e06399-c153-450b-ada7-127900587260', '5c58ec4c-f7a9-4607-965d-c7ba19c90dac'], emailAddresses: ['testemail@test.ac.uk']}, {name: 'sdfswedrwerwerwerwerwerwerw', beachLists: ['d2e06399-c153-450b-ada7-127900587260'], emailAddresses: ['testemail@test.ac.uk']}, {name: 'ttetetgaeg', beachLists: ['4f346d5b-f7dc-40ec-ba2c-6d1fd071c590'], emailAddresses: ['andrew.evans@exeter.ac.uk']}]

function writeOutJson(savPath, dataConversion) {
        let data = JSON.stringify(dataConversion);
        // Do your processing, MD5, send a satellite to the moon, etc.
        fs.writeFile(savPath, data, function(err) {
            if (err) {
                throw err;
            }
            console.log('complete');
        });
}

// Examples

const destin = __dirname + '\\sitelistuuids.json';
const source = __dirname + '\\listtodeletemock.json';

writeOutJson(source, dataToConvert);
