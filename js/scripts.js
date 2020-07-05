const el = document.getElementsByClassName('btn-outline-success');

el.addEventListener('onclick', changeColor);

function changeColor() {
    el.style.background-color = '#f5f9ff';
}