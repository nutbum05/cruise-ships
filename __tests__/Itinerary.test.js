const Itinerary = require('../src/Itinerary')
const Port = require('../src/Port.js');

describe('Itinerary', () => {
  let itinerary;
  let port
  beforeEach(() => {
    itinerary = new Itinerary(port);
    port = new Port('Dover')
  });
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('have  ports', () => {
    expect(itinerary.ports).toEqual(port);
  });
});
