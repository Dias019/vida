let button = document.querySelector('button');
let modal = document.querySelector('dialog');
let buttonClose = document.querySelector('dialog button');

button.onclick = function () {
    modal.showModal()
}


buttonClose.onclick = function () {
    modal.close()
}