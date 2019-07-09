const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');


describe('Ship', () => {
  let ship;
  let port;
  beforeEach(() => {
    ship = new Ship('Dover');
    port = new Port('Dover');
    ship = new Ship(port);
  });
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort.name).toBe('Dover');
    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock at the different port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover)
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort.name).toBe(calais.name);
  });
});
