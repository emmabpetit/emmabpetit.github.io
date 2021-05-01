

/* Overlay Visable*/
function showOverlay(lightboxID) {

    document.getElementById('overlay').classList.remove('nope');

    document.getElementById(lightboxID).classList.remove('nope');
}


/* Image Big*/
function makeimg1grow() {
	showOverlay('graphic-1');
}
document.getElementById('smol-img1').onclick = makeimg1grow;


function makeimg2grow() {
	showOverlay('graphic-2');
}
document.getElementById('smol-img2').onclick = makeimg2grow;

function makeimg3grow() {
	showOverlay('graphic-3');
}
document.getElementById('smol-img3').onclick = makeimg3grow;

function makeimg4grow() {
	showOverlay('graphic-4');
}
document.getElementById('smol-img4').onclick = makeimg4grow;

function makeimg5grow() {
	showOverlay('graphic-5');
}
document.getElementById('smol-img5').onclick = makeimg5grow;

function makeimg6grow() {
	showOverlay('graphic-6');
}
document.getElementById('smol-img6').onclick = makeimg6grow;

function makeimg7grow() {
	showOverlay('graphic-7');
}
document.getElementById('smol-img7').onclick = makeimg7grow;

function makeimg8grow() {
	showOverlay('graphic-8');
}
document.getElementById('smol-img8').onclick = makeimg8grow;

function makeimg9grow() {
	showOverlay('graphic-9');
}
document.getElementById('smol-img9').onclick = makeimg9grow;

function makeimg10grow() {
	showOverlay('graphic-10');
}
document.getElementById('smol-img10').onclick = makeimg10grow;

function makeimg11grow() {
	showOverlay('graphic-11');
}
document.getElementById('smol-img11').onclick = makeimg11grow;

function makeimg12grow() {
	showOverlay('graphic-12');
}
document.getElementById('smol-img12').onclick = makeimg12grow; 


/* Close function*/
function closeBoxes(lightboxID) {

	document.getElementById('overlay').classList.add('nope');

	document.getElementById(lightboxID).classList.add('nope');
}


function closeAllboxes() {

	var boxes = document.getElementsByClassName('big-boy-box');

	for (var i = 0; i < boxes.length; i++) {

		var id = boxes[i].id;

		closeBoxes(id);
	}
}

document.getElementById('overlay').onclick = closeAllboxes;


















