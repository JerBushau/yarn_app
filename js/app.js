'use strict'

const addInput = document.getElementById('addProjectInput');
const addButton = document.getElementById('addProjectButton');
const clearAllButton = document.getElementById('clearAll');
const s = new Storage();
const v = new View(s);

// render any existing projects
if (s.arrayOfProjects) {
  for (let i = 0; i < s.arrayOfProjects.length; i++) {
    v.render(s.arrayOfProjects[i]);
  }
}

v.drpdwnState();

// stop submit when user presses enter while focused on input
addInput.onkeypress = function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  } 
}

addButton.onclick = function (e) {
  const title = addInput.value.trim();
  const project = new Project(s.n, title);

  if (!title) {
    return false
  }

  s.arrayOfProjects.push(project);
  s.saveAndIncrementN();
  s.saveArray();

  v.render(project);
  v.drpdwnState();

  e.preventDefault();

  addInput.value = '';

  v.showCreatedTab(project);

};

clearAllButton.onclick = function () {
  s.scratch();
}
