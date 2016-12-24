'use strict'

let n = 1;

// bootstrap dropdown active class bug workaround
$('.nav-pills').on('shown.bs.tab', 'a', function(e) {
    if (e.relatedTarget) {
        $(e.relatedTarget).removeClass('active');
    }
});    

document.getElementById('addProjectButton').onclick = function(e) {
	let addInput = document.getElementById('addProjectInput');
	let title = addInput.value;
	let a = new Display(n, title);

	e.preventDefault();
	a.render();
	n++;
	addInput.value = '';
};
