const path = require('path');

const filePath = path.join(__dirname, 'file.txt');
const dirname = path.dirname(filePath);
const extension = path.extname(filePath);

console.log('Current Directory Name:', __dirname);
console.log('File Path:', filePath);
console.log('Directory Name:', dirname);
console.log('File Extension:', extension);