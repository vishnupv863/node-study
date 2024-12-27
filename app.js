const os = require('os');

// info about the current user
const info = os.userInfo()
console.log(info)
console.log(`The systsem uptime is : ${os.uptime()}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemmory : os.totalmem(),
    freeMemmory : os.freemem(),
}
console.log(currentOS)