// Nickolodeon - 3
// CartoonNetwork - 7
// DisneyXD - 9

const rl = require('readline') //require "readline" is a lib of functions from nodejs, allows us to read stuff no matter the OS
const rli = rl.createInterface ({
    input: process.stdin,
})

rli.on('line', (giveChannelName))

    function giveChannelName (num) {
        switch (num) {
            case '3':
                console.log('Nickolodeon')
                break
            case '7':
                console.log('Cartoon Network')
                break
            case '9':
                console.log("Disneyee", "-XD")
                break
            default:
                console.log('noob this isnt valid')
                break
    }
}

// use node switchfunction.js in terminal gitbash to run this thingy