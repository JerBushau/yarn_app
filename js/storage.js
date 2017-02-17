'use strict'

function Storage() {
  this.arrayOfProjects = Lockr.get('projects') || [];
  this.n = Lockr.get('n') || 0;
}

Storage.prototype.saveArray = function () {
  Lockr.set('projects', this.arrayOfProjects);
}

Storage.prototype.saveAndIncrementN = function () {
  this.n++
  Lockr.set('n', this.n);
}
