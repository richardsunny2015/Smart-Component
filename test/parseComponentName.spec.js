const { parseComponentName } = require('../utilities');
const { expect } = require('chai');

describe('parseComponentName', () => {
  it('returns a string', () => {
    const result = parseComponentName();
    expect(result).to.be.a('string');
    expect(result).to.equal('');
  });
  it('automatically adds .js to string if not included', () => {
    expect(parseComponentName('Component')).to.equal('Component.js');
  });
  it("if specified, it won't change extension", () => {
    expect(parseComponentName('Component.jsx')).to.equal('Component.jsx');
    expect(parseComponentName('OneComponent.js')).to.equal('OneComponent.js');
  });
  it('takes a lowercase string and makes it uppercase', () => {
    expect(parseComponentName('someComponent.js')).to.equal('SomeComponent.js');
  });
  it('can take directories', () => {
      expect(parseComponentName('someDirectory/someFile')).to.equal('SomeFile.js')
      expect(parseComponentName('someDirectory/someDirectory2/someFile')).to.equal('SomeFile.js')
  })
});
