const { parseComponentName } = require('../utilities');
const { expect } = require('chai');

describe('parseComponentName', () => {
  it('returns a string', () => {
    const result = parseComponentName();
    expect(result).to.be.a('string');
    expect(result).to.equal('');
  });
  it('automatically removes .js or .jsx to string if included', () => {
    expect(parseComponentName('Component.js')).to.equal('Component');
    expect(parseComponentName('Component.jsx')).to.equal('Component');
  });
  it('if unspecified, it will return input', () => {
    expect(parseComponentName('OneComponent')).to.equal('OneComponent');
  });
  it('takes a lowercase string and makes it uppercase', () => {
    expect(parseComponentName('someComponent.js')).to.equal('SomeComponent');
    expect(parseComponentName('anotherComponent')).to.equal('AnotherComponent');
  });
  it('can take directories', () => {
    expect(parseComponentName('someDirectory/someFile')).to.equal('SomeFile');
    expect(
      parseComponentName('someDirectory/someDirectory2/someFile')
    ).to.equal('SomeFile');
    expect(parseComponentName('directoryOne/directoryTwo/directoryThree/SomeFile.jsx')).to.equal('SomeFile')
  });
});
