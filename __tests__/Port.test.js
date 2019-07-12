const Port = require('../src/Port.js');

describe('Port', () => {
  let port
  let ship;
  beforeEach(() => {
    port = new Port('Dover');
     ship = {};
  });
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('checks if object has  name property', () => {
    expect(port.name).toEqual('Dover');
  });
  it('can add a new ship', () => {
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('can remove a ship',() => {
const titanic = {};
const olimpic = {};
port.addShip(titanic);
port.addShip(olimpic);
port.removeShip(olimpic);
    expect(port.ships).toEqual([titanic]);
  });
});
