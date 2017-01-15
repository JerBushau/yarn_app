'use strict'

const addInput = document.getElementById('addProjectInput');
const addButton = document.getElementById('addProjectButton');
const arrayOfProjects = [];

let n = 1;

// stop submit when user presses enter while focused on input
addInput.onkeypress = function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
	}	
}

addButton.onclick = function(e) {
	let title = addInput.value.trim();
	let project = new Project(n, title);

	if (!title) {
		return false
	}

	e.preventDefault();
	arrayOfProjects.push(project);
	project.render();
	n++;

	if (document.getElementById('nav').children.length > 0) {
		document.getElementById('drpdwn').style.display = 'block';
	}

	addInput.value = '';
};
