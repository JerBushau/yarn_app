'use strict'

const addInput = document.getElementById('addProjectInput');
const addButton = document.getElementById('addProjectButton');

const arrayOfProjects = Lockr.get('projects') || [];
let n = Lockr.get('n') || 0;

if (arrayOfProjects) {
  for (let i = 0; i < arrayOfProjects.length; i++) {
    render(arrayOfProjects[i]);
  }
}

navLengthCheck();

// stop submit when user presses enter while focused on input
addInput.onkeypress = function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  } 
}

addButton.onclick = function(e) {
  const title = addInput.value.trim();
  const project = new Project(n, title);

  if (!title) {
    return false
  }

  arrayOfProjects.push(project);

  e.preventDefault();
  render(project);
  navLengthCheck();
  n++;

  Lockr.set('n', n)
  Lockr.set('projects', arrayOfProjects)

  addInput.value = '';

  $('a[href="#' + project.title + project.num + '"]').tab('show');
};

function navLengthCheck() {
  if (document.getElementById('nav').childElementCount) {
    document.getElementById('drpdwn').style.display = 'block';
  }
}

function render(obj) {
  const mainContainer = document.getElementById('mainContainer');
  const nav = document.getElementById('nav');
  const widgetCons = mainContainer.getElementsByClassName('widgetContainer' + obj.num);

  nav.insertAdjacentHTML('beforeend', obj.template.link);
  mainContainer.insertAdjacentHTML('beforeend', obj.template.content);

  for (let i = 0; i < widgetCons.length; i++) {
    bindButtons(widgetCons[i], '_row', obj);
    bindButtons(widgetCons[i], 'stitch', obj);
  }
}

function bindButtons(el, prefix, obj) {
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
