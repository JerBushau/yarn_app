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
	let title = addInput.value.trim();
	let a = new Display(n, title);

	if (!title) {
		return false
	}

	e.preventDefault();
	a.render();
	n++;
	addInput.value = '';

	if (document.getElementById('nav').children.length > 0) {
		document.getElementById('drpdwn').style.display = 'block';
	}
	
	$('.active').removeClass('active');
	$('#' + a.title + a.num).tab('show');
	$('.dropdown-toggle').addClass('active');
	$('.dropdown-item[href="#' + a.title + a.num + '"]').addClass('active');
};
