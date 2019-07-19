function Port(name) {
  this.name = name;
  this.ships = [];
}
Port.prototype = {
  addShip: function (ship) {
    this.ships.push(ship);
  },
  removeShip: function (ship) {
    const shipToRem = this.ships.indexOf(ship);
    this.ships.splice(shipToRem, 1);
  },
};


module.exports = Port;
