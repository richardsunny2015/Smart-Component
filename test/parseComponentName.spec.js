const {parseComponentName} = require('../utilities')
const {expect} = require('chai')

describe('parseComponentName', () => {
    it('returns a string', () => {
        expect(parseComponentName()).to.be.a('string')
    })
})
