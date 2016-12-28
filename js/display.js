'use strict'

function Display(x, title) {
	this.num = x;
	this.title = title.replace(/\s+/g, '-');
	this.row = new Counter();
	this.stitch = new Counter();
	this.tabLinkHtml = `
	<a class="dropdown-item" data-toggle="tab" href="#${this.title}${this.num}" 
	role="tab">${title}</a>`; 
	this.tabContentHtml = ` 
	<div class="widgetContainer${this.num} tab-pane fade" id="${this.title}${this.num}" role="tabpanel">
		<h1>${title}</h1>
		<section class="row">
			<h1 class="title">row</h1>
			<br>
			<button class="rowClear clear title">clear</button>
			<div class="display">
				<button class="rowDown arrow"><</button>
				<div class="rowNumber">
				</div>
				<button class="rowUp arrow">></button>
			</div>
		</section>
		<section class="stitch">
			<h1 class="title">stitch</h1>
			<br>
			<button class="stitchClear clear title">clear</button>
			<div class="display">
				<button class="stitchDown arrow"><</button>
				<div class="stitchNumber">
				</div>
				<button class="stitchUp arrow">></button>
			</div>
		</section>
	</div>`;
}

Display.prototype.render = function() {
	let mainContainer = document.getElementById('mainContainer');
	let nav = document.getElementById('nav');
	let widgetCons = mainContainer.getElementsByClassName('widgetContainer' + this.num);

	nav.insertAdjacentHTML('beforeend', this.tabLinkHtml);
	mainContainer.insertAdjacentHTML('beforeend', this.tabContentHtml);

	for (let i = 0; i < widgetCons.length; i++) {
		this.bindButtons(widgetCons[i], 'row');
		this.bindButtons(widgetCons[i], 'stitch');
	}
}

Display.prototype.bindButtons = function(el, pre) {
	let main = el.querySelector('section.' + pre);
	let up = main.querySelector('button.' + pre + 'Up');
	let down = main.querySelector('button.' + pre +'Down');
	let clear = main.querySelector('button.' + pre + 'Clear');
	let number = main.querySelector('div.' + pre + 'Number');

	if (pre === 'row') {
		pre = this.row;
	} else if ( pre === 'stitch') {
		pre = this.stitch;
	}	

	number.innerText = pre.currentNumber

	up.onclick = () => {
		pre.up();
		number.innerText = pre.currentNumber;
	}

	down.onclick = () => {
		pre.down();
		number.innerText = pre.currentNumber;
	}

	clear.onclick = () => {
		pre.clear();
		number.innerText = pre.currentNumber;
	}
}
