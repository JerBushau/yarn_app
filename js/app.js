'use strict'

// bootstrap dropdown workaround
$(document).ready(function() {
    $('.nav-pills').on('shown.bs.tab', 'a', function(e) {
        console.log(e.relatedTarget);
        if (e.relatedTarget) {
            $(e.relatedTarget).removeClass('active');
        }
    });    
});

let a = new Display(1, 'Scarf');
let b = new Display(2, 'Hat');
let c = new Display(3, 'Booties');
let d = new Display(4, 'Slippers');
let e = new Display(5, 'Hat');

a.render();
b.render();
c.render();
d.render();
e.render();
