let puzzle = document.getElementById("puzzle");

let puzzlePieces = document.getElementsByClassName("puzzlePiece");

let step = 1;
let p1, p2;

for (let i = 0; i < puzzlePieces.length; i++) {
    puzzlePieces[i].addEventListener("click", function(e) {
        switch(step) {
            case 1:
                if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
                    e.classList.add("selected");
                    e.dataset.clicked = "true";
                    p1 = e.target;
                    step = 2;
                }
                break;
            case 2:
                if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
                    e.classList.add("selected");
                    e.dataset.clicked = "true";
                    p2 = e.target;
                    step = 3;
                }
                break;
            case 3:
                let place = p2.parentElement;
                p2.parentElement.appendChild(p1);
                place.appendChild(p2);
                p1.classList.remove("selected");
                p2.classList.remove("selected");
                step = 1;
                break;
        }
    });
}