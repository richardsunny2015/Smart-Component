const parseComponentName = (fileStr) => {
    // split the string by '/' and make alterations to the last string in the array
    if (!fileStr) return ''
    const splitted = fileStr.split('/')
    const fileName = splitted[splitted.length - 1]
    let newFileStr = fileName.slice(0, 1).toUpperCase() + fileName.slice(1)
    const extensionIndex = newFileStr.indexOf('.')
    if (extensionIndex > -1) newFileStr = newFileStr.slice(0, extensionIndex)

    return newFileStr
}

module.exports = parseComponentName
