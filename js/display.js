'use strict'

function Display(x, title) {
	   this.num = x;
	 this.title = title;
	   this.row = new Counter();
	this.stitch = new Counter();
	  this.html = `
	<div class="widgetContainer${this.num}">
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
	let mainContainer = document.getElementById('mainContainer')
	let    widgetCons = mainContainer.getElementsByClassName('widgetContainer' + this.num);

	mainContainer.insertAdjacentHTML('beforeend', this.html);

	for (let i = 0; i < widgetCons.length; i++) {
		this.bindButtons(widgetCons[i], 'row');
		this.bindButtons(widgetCons[i], 'stitch');
	}
}

Display.prototype.bindButtons = function(el, pre) {
	let   main = el.querySelector('section.' + pre);
	let     up = main.querySelector('button.' + pre + 'Up');
	let   down = main.querySelector('button.'+ pre +'Down');
	let  clear = main.querySelector('button.' + pre + 'Clear');
	let number = main.querySelector('div.' + pre + 'Number')


	switch(pre) {
		case 'row':
			number.innerText = this.row.currentNumber

			up.onclick = () => {
				this.row.up();
				number.innerText = this.row.currentNumber;
			}

			down.onclick = () => {
				this.row.down();
				number.innerText = this.row.currentNumber;
			}

			clear.onclick = () => {
				this.row.clear();
				number.innerText = this.row.currentNumber;
			}

			break;

		case 'stitch':
			number.innerText = this.stitch.currentNumber;

			up.onclick = () => {
				this.stitch.up();
				number.innerText = this.stitch.currentNumber;
			}

			down.onclick = () => {
				this.stitch.down();
				number.innerText = this.stitch.currentNumber;
			}

			clear.onclick = () => {
				this.stitch.clear();
				number.innerText = this.stitch.currentNumber;
			}

			break;
	}	
}
