const line = document.getElementById("line");
let angle = 0;

function rotateLine() {
    angle += 2; // Increase rotation angle
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

   
    console.log(`Rotation: ${angle}deg`);
}

// Rotate smoothly every 20 milliseconds
setInterval(rotateLine, 20);
