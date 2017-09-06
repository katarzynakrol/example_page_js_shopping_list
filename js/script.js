var checkbox;
var empty;


window.onload = function () {
    checkbox = document.getElementsByClassName('check');
    empty = document.getElementById('empty');

    check();
}

function check() {
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', cross);
        checkbox[i].checked = false;

    }
    item();
}

function cross(ev) {
    if (ev.target.nextElementSibling.classList.contains('cross') === true) {
        ev.target.nextElementSibling.removeAttribute('class', 'cross');
    } else {
        ev.target.nextElementSibling.setAttribute('class', 'cross');
    }
}

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        addNewItems();
    }
});


function addNewItems() {

    var list = document.getElementById('first');

    var div = document.createElement('div');
    div.className = 'item';

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'check';

    var newItem = document.createElement('p');

    var span = document.createElement('span');
    span.className = 'deleteButton';

    var newText = document.getElementById('addText').value;

    newItem.appendChild(document.createTextNode(newText));

    if (newText === '') {
        alert('Please add something to the list');
    } else {
        empty.innerHTML = '';
        list.insertBefore(div, list.childNodes[0]);
        div.insertBefore(input, div.childNodes[0]);
        div.insertBefore(newItem, div.childNodes[1]);
        div.insertBefore(span, div.childNodes[2]);
    }

    check();
}

function item() {
    var span = document.getElementsByClassName('deleteButton');
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener('click', deleteItem);
    }
}

function deleteItem(e) {
    e.target.parentNode.remove();
    if (checkbox.length === 0) {
        empty.innerHTML = 'Your list is empty';
    }
}