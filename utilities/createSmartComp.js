const createSmartComp = componentName => {
    const template = `import React, {Component} from 'react'\n\nclass ${componentName} extends Component {\n\tconstructor(props) {\n\t\tsuper(props)\n\t\tthis.state = {}\n\t}\n\n\trender() {\n\t\treturn (\n\n\t\t)\n\t}\n}\n\nexport default ${componentName}`
    return template
}

module.exports = createSmartComp
