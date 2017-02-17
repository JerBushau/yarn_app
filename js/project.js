'use strict'

function Project(num, title) {
  this.num = num;
  // get rid of all non-word characters
  this.title = title.replace(/[^\w]/g, '');
  this._row = 0;
  this.stitch = 0;
  this.template = new Template(this, title);
}
