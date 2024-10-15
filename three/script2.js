function grow(element) {
    element.style.transform = "scale(1.1)";
}

function shrink(element) {
    element.style.transform = "scale(1)";
}

document.getElementById('box3').addEventListener('dblclick', function() {
    this.style.borderRadius = this.style.borderRadius === '50%' ? '0' : '50%';
});

document.getElementById('box4').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    this.textContent = "Text changed!";
});

document.getElementById('resetButton').addEventListener('click', function() {
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.style = "";
        box.textContent = box.id === "box4" ? "Right click to change text" : box.textContent;
    }
});

// Initialize box colors
window.onload = function() {
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        changeColor(box);
    }
};
