const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('ship with ports and an itinerary', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    const port = {
      removeShip: jest.fn(),
      addShip: jest.fn(),
    };
    dover = {
      ...port,
      name: 'Dover',
      ships: [],
    };
    calais = {
      ...port,
      name: 'Calais',
      ships: [],
    };
    itinerary = {
      ports: [dover, calais]
    };
    ship = new Ship(itinerary);
  });
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });
  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });
  it('can dock at the different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  });
  it('can\'t sail futher than its itinerary', () => {
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
  it('gets added to aport instantiation ', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
  });
});
