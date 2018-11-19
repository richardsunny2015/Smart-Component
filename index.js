const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2)) // no flags saves all arguments in '_' property
    console.log(args) // the very next arg after a flag is in the args object under that flag
    // if a flag is followed by another flag, the latter flag has a property of true
}
