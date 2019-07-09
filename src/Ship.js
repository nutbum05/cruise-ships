/* eslint-disable func-names */
function Ship(port) {
  this.currentPort = port;
  this.ships = [];
}
Ship.prototype = {
  setSail: function () {
    this.currentPort = false;
  },
  dock: function (port) {
    this.currentPort = port;
  },
};

module.exports = Ship;
