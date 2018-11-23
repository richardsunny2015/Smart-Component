const {appendFileExtension} = require('../utilities')
const {expect} = require('chai')

describe('appendFileExtension', () => {
    it('returns a string', () => {
        expect(appendFileExtension()).to.be.a('string')
    })
})
