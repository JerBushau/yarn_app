'use strict'

// template strings don't work in IE...

function Template(project, title) {
  this.id = `${project.title}${project.num}`;

  this.link = `
  <a class="dropdown-item" data-toggle="pill" href="#${this.id}" 
  role="tab">${title}</a>`;
  
  this.content = ` 
  <div class="widgetContainer${project.num} tab-pane fade" id="${this.id}" role="tabpanel">
    <h1 class="project-title">${title}</h1>
    <section class="_row">
      <h1 class="title">row</h1>
      <br>
      <button class="_rowClear clear title">clear</button>
      <div class="display">
        <button class="_rowDown arrow"><</button>
        <div class="_rowNumber">
        </div>
        <button class="_rowUp arrow">></button>
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
