const GenerateUniqueId = require('../../src/utils/generateUniqueId');

describe('GenerateUniqueId', () => {
  it('should generate an unique ID', () => {
    const id = GenerateUniqueId();

    expect(id).toHaveLength(8)
  })
})