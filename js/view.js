'use strict'

function View(storage) {
  this.s = storage;
  this.mainContainer = document.getElementById('mainContainer');
  this.nav = document.getElementById('nav');
  this.navDrpdwnBtn = document.getElementById('drpdwn');
}

View.prototype.drpdwnState = function () {
  if (this.nav.childElementCount) {
    this.navDrpdwnBtn.style.display = 'block';
  }
}

View.prototype.showCreatedTab = function (obj) {
  $('a[href="#' + obj.title + obj.num + '"]').tab('show');
}

View.prototype.render = function (obj) {
  const widgetCons = this.mainContainer.getElementsByClassName('widgetContainer' + obj.num);

  this.nav.insertAdjacentHTML('beforeend', obj.template.link);
  this.mainContainer.insertAdjacentHTML('beforeend', obj.template.content);

  for (let i = 0; i < widgetCons.length; i++) {
    this.bindButtons(widgetCons[i], '_row', obj);
    this.bindButtons(widgetCons[i], 'stitch', obj);
  }
} 

View.prototype.bindButtons = function (el, prefix, obj) {
  const main = el.querySelector('section.' + prefix);
  const del = el.querySelector('button.delete');
  const up = main.querySelector('button.' + prefix + 'Up');
  const down = main.querySelector('button.' + prefix +'Down');
  const clear = main.querySelector('button.' + prefix + 'Clear');
  const number = main.querySelector('div.' + prefix + 'Number');
  const index = this.s.arrayOfProjects.indexOf(obj);
  let prop;
  
  if (prefix === '_row') {
    prop = obj._row;
  } else if ( prefix === 'stitch') {
    prop = obj.stitch;
  } 
  
  number.innerText = prop;

  del.onclick = () => {
    this.s.deleteItem(index);
    location.reload();
  }

  up.onclick = () => {
    prop++;
    number.innerText = prop;
    this.s.arrayOfProjects[index][prefix] = prop;
    this.s.saveArray();
  }

  down.onclick = () => {
    if (!prop) {
      return
    }

    prop--;
    number.innerText = prop;
    this.s.arrayOfProjects[index][prefix] = prop;
    this.s.saveArray();
  }

  clear.onclick = () => {
    prop = 0;
    number.innerText = prop;
    this.s.arrayOfProjects[index][prefix] = prop;
    this.s.saveArray();
  }
}
