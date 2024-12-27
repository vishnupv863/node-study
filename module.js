const path  = require('path');

console.log(`${path.sep}`)

const pathName = path.join('./content', 'subcontent', 'text.txt')
console.log(pathName)
console.log(`the base name of text file is ${path.basename(pathName)}`)
console.log(`the absolute path of text file is ${path.resolve(__dirname,'content','subcontent','text.txt')}`)