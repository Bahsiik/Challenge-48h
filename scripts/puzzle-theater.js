let puzzle = document.getElementById("puzzle");

let puzzlePieces = document.getElementsByClassName("puzzlePiece");

let step = 1;
let p1, p2;

// for (let i = 0; i < puzzlePieces.length; i++) {
//     puzzlePieces[i].addEventListener("click", function(e) {
//         switch(step) {
//             case 1:
//                 if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
//                     e.target.classList.add("selected");
//                     e.target.dataset.clicked = "true";
//                     p1 = e.target;
//                     step = 2;
//                 }
//                 break;
//             case 2:
//                 if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
//                     e.target.classList.add("selected");
//                     e.target.dataset.clicked = "true";
//                     p2 = e.target;
//                     step = 3;
//                 }
//                 break;
//             case 3:
//                 let place = p2.parentElement;
//                 p2.parentElement.appendChild(p1);
//                 place.appendChild(p2);
//                 p1.classList.remove("selected");
//                 p2.classList.remove("selected");
//                 step = 1;
//                 break;
//         }
//     });
// }

document.addEventListener("click", function(e) {
    switch(step) {
        case 1:
            if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
                e.target.classList.add("selected");
                e.target.dataset.clicked = "true";
                p1 = e.target;
                step = 2;
            }
            break;
        case 2:
            if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected")) {
                e.target.classList.add("selected");
                e.target.dataset.clicked = "true";
                p2 = e.target;
                const saveP1 = p1.cloneNode(true);
                const saveP2 = p2.cloneNode(true);
                const p1Children = Array.from(p1.children);
                const p2Children = Array.from(p2.children);
                while (p1.firstChild) {
                    p1.removeChild(p1.firstChild);
                }
                while (p2.firstChild) {
                    p2.removeChild(p2.firstChild);
                }
                for (let i = 0; i < p1Children.length; i++) {
                    p2.appendChild(p1Children[i]);
                }
                for (let i = 0; i < p2Children.length; i++) {
                    p1.appendChild(p2Children[i]);
                }
                p1.classList.remove("selected");
                p2.classList.remove("selected");
                p1.dataset.clicked = "false";
                p2.dataset.clicked = "false";
                step = 1;
            }
            break;
    }
});