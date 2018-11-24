const { appendFileExtension } = require('../utilities');
const { expect } = require('chai');

describe('appendFileExtension', () => {
  it('returns a string', () => {
    expect(appendFileExtension()).to.be.a('string');
  });
  it('adds .js if not specified', () => {
    expect(appendFileExtension('SomeComponent')).to.equal('SomeComponent.js');
  });
  it('keeps .js if specified', () => {
    expect(appendFileExtension('SomeComponent.js')).to.equal(
      'SomeComponent.js'
    );
  });
  it('keeps .jsx if specified', () => {
    expect(appendFileExtension('SomeComponent.jsx')).to.equal(
      'SomeComponent.jsx'
    );
  });
  it('can handle directories', () => {
      expect(appendFileExtension('components/SomeComponent')).to.equal('components/SomeComponent.js')
      expect(appendFileExtension('client/public/components/anotherComponent')).to.equal('client/public/components/anotherComponent.js')
  })
  it('throws errors if it specifies an incorrect ext.', () => {
      expect(() => appendFileExtension('SomeComponent.blah')).to.throw()
      expect(() => appendFileExtension('components/someComponent.blah')).to.throw()
  })
});
