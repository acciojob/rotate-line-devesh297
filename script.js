const line = document.getElementById("line");
let angle = 0;

function rotateLine() {
    angle += 2; 
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Rotate every 20 milliseconds
setInterval(rotateLine, 20);
