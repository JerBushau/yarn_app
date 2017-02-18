'use strict'

function Storage() {
  this.arrayOfProjects = Lockr.get('projects') || [];
  this.n = Lockr.get('n') || 0;
}

Storage.prototype.saveArray = function () {
  Lockr.set('projects', this.arrayOfProjects);
}

Storage.prototype.deleteItem = function (index) {
  this.arrayOfProjects.splice(index, 1);
  this.saveArray();
}

Storage.prototype.saveAndIncrementN = function () {
  this.n++
  Lockr.set('n', this.n);
}

Storage.prototype.scratch = function () {
  Lockr.flush();
  location.reload();
}
