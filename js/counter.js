'use strict'

function Counter() {
  this.currentNumber = 0;
}

Counter.prototype.down = function() {
  if(this.currentNumber) {
    this.currentNumber--;
  }
}

Counter.prototype.up = function() {
  this.currentNumber++;
}

Counter.prototype.clear = function() {
  this.currentNumber = 0;
}
