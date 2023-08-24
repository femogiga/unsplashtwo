const fs = require('fs');
const https = require('https');
const path = require('path')

const imageDownloader = (label, url) => {
    const fileExtension = path.extname(url)
    const filePath = `${label}${fileExtension}`
    const file = fs.createWriteStream(filePath);

    https.get(url, response => {
        response.pipe(file);
    });

    file.on('finish', () => {
        file.close();
        console.log(`image downloaded as ${label}`);
    }).on('error', err => {
        fs.unlink(label, () => { }); // Add an empty callback to handle the asynchronous nature
        console.error(`error downloading image: ${err.message}`);
    });
};

module.exports = { imageDownloader };
