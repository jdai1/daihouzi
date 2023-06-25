const fs = require('fs')
const path = require('path')

const dir = '../../resources/images/'
const images = fs.readdirSync(dir);

const imgData = [];
images.forEach((img) => {
    imgData.push('require(\'' + path.resolve(dir, img) + '\')')
})

console.log(imgData)