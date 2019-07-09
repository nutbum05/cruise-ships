const Port = require('../src/Port.js');

describe('Port', () => {
  let port;
  beforeEach(() => {
    port = new Port('Dover');
  });
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('checks if object has  name property', () => {
    expect(port.name).toEqual('Dover');
  });
});
