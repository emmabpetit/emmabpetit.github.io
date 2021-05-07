

let slider = document.getElementById("myRange");
let output = document.getElementById("percent");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  exchange();
}

let main = document.getElementById("main-content");
let splash = document.getElementById("splash");

function exchange() {
    if (document.getElementById('percent').innerHTML == 100) {
        splash.classList.add('hidden');
        main.classList.remove('hidden');
    }
}

/* when the slider.value is equal to 100 I want the 
class hidden to be removed from the div #main-content and I 
want the class hidden to be added to the div #splash*/



