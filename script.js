const line = document.getElementById("line");
        let angle = 0;

        setInterval(() => {
            angle += 2;
            line.style.transform = `rotate(${angle}deg)`;
        }, 20);
