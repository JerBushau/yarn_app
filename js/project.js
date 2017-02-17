'use strict'

function Project(num, title) {
  this.num = num;
  this.title = title.replace(/\s+/g, '-');
  this._row = 0;
  this.stitch = 0;
  this.template = new Template(this, title);
}
