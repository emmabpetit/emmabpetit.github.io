


function dropdownmenu() {

    let dropdown =
    document.querySelector('#dropdown-content')

    dropdown.classList.remove('clover');

}

let nav = 
document.getElementById('dropdown');

nav.onmouseover = dropdownmenu;


function closedropdown() {

    let dropdown =
    document.querySelector('#dropdown-content')

    dropdown.classList.add('clover');

}

let dropdown =
document.getElementById('dropdown')

dropdown.onmouseout = closedropdown;
