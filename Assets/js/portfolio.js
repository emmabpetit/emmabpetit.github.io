

/* Overlay Visable*/
function showOverlay (overlay) {

    overlayId.classList.remove('nope');

}

let overlayId = document.getElementById ('overlay');

/* when you click on any images the class nope is taken away, allowing the class grow to be visible*/


/* Image Big*/
function makeimggrow(bigImg) {

	let showOverlay = document.getElementById ('graphic-1');

    showOverlay.classList.remove("nope");
	
}

let tinyImg1 = document.getElementById ('smol-img1');

tinyImg1.onclick = makeimggrow


/* when you click on img1 the class nope is taken away, allowing the class grow to be visible*/
