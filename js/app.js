'use strict'

let n = 1;
let arrayOfProjects = [];
let addInput = document.getElementById('addProjectInput');
let addButton = document.getElementById('addProjectButton');

// bootstrap dropdown active class bug 'workaround'
$('.nav-pills').on('shown.bs.tab', function(e) {
    if (e.relatedTarget) {
        $(e.relatedTarget).removeClass('active');
    }
});

// stop submit when user presses enter while focused on input
addInput.onkeypress = function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
	}	
}

addButton.onclick = function(e) {
	let title = addInput.value.trim();
	let a = new Project(n, title);

	if (!title) {
		return false
	}

	e.preventDefault();
	arrayOfProjects.push(a);
	a.render();
	n++;

	if (document.getElementById('nav').children.length > 0) {
		document.getElementById('drpdwn').style.display = 'block';
	}

	// remove .active from all current elements
	$('.active').removeClass('active');
	$('#' + a.title + a.num).tab('show');
	// give .active to both toggle button & specific item.
	$('.dropdown-toggle').addClass('active');
	$(`.dropdown-item[href="#${a.title}${a.num}"]`).addClass('active');

	addInput.value = '';
};
