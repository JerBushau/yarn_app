'use strict'

function View() {
  this.mainContainer = document.getElementById('mainContainer');
  this.nav = document.getElementById('nav');
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
  const up = main.querySelector('button.' + prefix + 'Up');
  const down = main.querySelector('button.' + prefix +'Down');
  const clear = main.querySelector('button.' + prefix + 'Clear');
  const number = main.querySelector('div.' + prefix + 'Number');
  const index = arrayOfProjects.indexOf(obj);
  let prop;
  
  if (prefix === '_row') {
    prop = obj._row;
  } else if ( prefix === 'stitch') {
    prop = obj.stitch;
  } 
  
  number.innerText = prop;

  up.onclick = () => {
    prop++;
    number.innerText = prop;
    arrayOfProjects[index][prefix] = prop;
    Lockr.set('projects', arrayOfProjects);
  }

  down.onclick = () => {
    if (!prop) {
      return
    }

    prop--;
    number.innerText = prop;
    arrayOfProjects[index][prefix] = prop;
    Lockr.set('projects', arrayOfProjects);
  }

  clear.onclick = () => {
    prop = 0;
    number.innerText = prop;
    arrayOfProjects[index][prefix] = prop;
    Lockr.set('projects', arrayOfProjects);
  }
}
