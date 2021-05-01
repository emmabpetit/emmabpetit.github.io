

/* Overlay Visable*/
function showOverlay(lightboxID) {

    document.getElementById('overlay').classList.remove('nope');

    document.getElementById(lightboxID).classList.remove('nope');
}


/* Image Big*/
function makeimg1grow() {
	showOverlay('graphic-1');
}
document.getElementById('art-1').onclick = makeimg1grow;


function makeimg2grow() {
	showOverlay('graphic-2');
}
document.getElementById('art-2').onclick = makeimg2grow;

function makeimg3grow() {
	showOverlay('graphic-3');
}
document.getElementById('art-3').onclick = makeimg3grow;

function makeimg4grow() {
	showOverlay('graphic-4');
}
document.getElementById('art-4').onclick = makeimg4grow;

function makeimg5grow() {
	showOverlay('graphic-5');
}
document.getElementById('art-5').onclick = makeimg5grow;

function makeimg6grow() {
	showOverlay('graphic-6');
}
document.getElementById('art-6').onclick = makeimg6grow;


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


















