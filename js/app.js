'use strict'

const addInput = document.getElementById('addProjectInput');
const addButton = document.getElementById('addProjectButton');
const v = new View();

const arrayOfProjects = Lockr.get('projects') || [];
let n = Lockr.get('n') || 0;

if (arrayOfProjects) {
  for (let i = 0; i < arrayOfProjects.length; i++) {
    v.render(arrayOfProjects[i]);
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
  v.render(project);
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
