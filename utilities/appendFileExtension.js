const appendFileExtension = fileStr => {
    if (!fileStr) return ''
    const fileExtensionIdx = fileStr.lastIndexOf('.')
    let fileExtension = ''
    if (fileExtensionIdx > -1) fileExtension = fileStr.slice(fileExtensionIdx)
    if (!fileExtension) return `${fileStr}.js`
    if (fileExtension === '.js' || fileExtension === '.jsx') return fileStr
    throw new Error('Use either .js or .jsx file extensions')
}

module.exports = appendFileExtension
