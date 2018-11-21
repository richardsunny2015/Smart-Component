const parseComponentName = (fileStr) => {
    // split the string by '/' and make alterations to the last string in the array
    if (!fileStr) return ''
    const splitted = fileStr.split('/')
    const fileName = splitted[splitted.length - 1]
    const newFileStr = fileName.slice(0, 1).toUpperCase() + fileName.slice(1)
    if (fileName.lastIndexOf('.') < 0) return `${newFileStr}.js`

    return newFileStr
}

module.exports = parseComponentName
