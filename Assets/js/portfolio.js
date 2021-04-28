

/* Overlay Visable*/
function showOverlay(lightboxID) {

    document.getElementById('overlay').classList.remove('nope');

    document.getElementById('graphic-1').classList.remove('nope');


}

/* Image Big*/
function makeimggrow() {

	showOverlay('graphic-1');
	
}

document.getElementById('smol-img1').onclick = makeimggrow;


/* when you click on img1 the class nope is taken away, allowing the class grow to be visible*/


