let puzzle = document.getElementById("puzzle");

let puzzlePieces = document.getElementsByClassName("puzzlePiece");

let step = 1;
let p1, p2;

document.addEventListener("click", function(e) {
    switch(step) {
        case 1:
            if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected") && !e.target.classList.contains("unmovablePiece")) {
                e.target.classList.add("selected");
                e.target.dataset.clicked = "true";
                p1 = e.target;
                step = 2;
            }
            break;
        case 2:
            if (e.target.classList.contains("puzzlePiece") && !e.target.classList.contains("selected") && !e.target.classList.contains("unmovablePiece")) {
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

addEventListener("load", () => {
    const character = document.getElementById("character");
    let grounds = document.getElementsByClassName("blocSolo");
    let tree = document.getElementById("tree");
    let puzzle = document.getElementById("puzzle");
    let puzzlePieces = document.getElementsByClassName("puzzlePiece");

    character.style.left = "0px";

    let force = 1;
    let isOnGround = false;
    let isGoingRight = true;

    moveCharacter();

    function moveCharacter() {
        isOnGround = false;

        //check if character is on ground, if not, add gravity
        for (let i = 0; i < grounds.length; i++) {
            if (character.getBoundingClientRect().bottom + 2 >= grounds[i].getBoundingClientRect().top && character.getBoundingClientRect().bottom < grounds[i].getBoundingClientRect().bottom && character.getBoundingClientRect().right > grounds[i].getBoundingClientRect().left && character.getBoundingClientRect().left < grounds[i].getBoundingClientRect().right) {
                isOnGround = true;
                force = 1;
            }
        }

        // conditions when touching things
        if ((character.getBoundingClientRect().right >= tree.getBoundingClientRect().left && character.getBoundingClientRect().right < tree.getBoundingClientRect().right && Math.round(character.getBoundingClientRect().bottom) === Math.round(tree.getBoundingClientRect().bottom)) || character.getBoundingClientRect().right >= puzzle.getBoundingClientRect().right) {
            console.log("is not going right");
            isGoingRight = false;
        }

        if (character.getBoundingClientRect().left <= puzzle.getBoundingClientRect().left || (character.getBoundingClientRect().left <= tree.getBoundingClientRect().right && character.getBoundingClientRect().left > tree.getBoundingClientRect().left && Math.round(character.getBoundingClientRect().bottom) === Math.round(tree.getBoundingClientRect().bottom))) {
            console.log("is going right");
            isGoingRight = true;
        }

        // swap character div when touching a new puzzle piece
        for (let i = 0; i < puzzlePieces.length; i++) {
            let child = puzzlePieces[i].children;
            // if child contains character, then set checked to true
            for (let j = 0; j < child.length; j++) {
                if (child[j].id === "character") {
                    puzzlePieces[i].dataset.checked = "true";
                }
            }
            // if character's center is inside the puzzle piece then swap the character place
            if (character.getBoundingClientRect().left + character.width/2 >=
                puzzlePieces[i].getBoundingClientRect().left && character.getBoundingClientRect().left +
                character.width/2 <= puzzlePieces[i].getBoundingClientRect().right && character.getBoundingClientRect().top <=
                puzzlePieces[i].getBoundingClientRect().bottom && character.getBoundingClientRect().bottom >=
                puzzlePieces[i].getBoundingClientRect().top && puzzlePieces[i].dataset.checked === "false") {
                // puzzlePieces[i].dataset.checked = "true";
                character.closest(".puzzlePiece").dataset.checked = "false";
                character.parentNode.removeChild(character);
                puzzlePieces[i].appendChild(character);
                if (isGoingRight) {
                    console.log("right");
                    character.style.left = "0px";
                } else {
                    console.log("left");
                    character.style.left = puzzlePieces[i].getBoundingClientRect().width - character.getBoundingClientRect().width + "px";
                }
            }
        }

        // move character
        if (isGoingRight && isOnGround) {
            character.style.left = parseFloat(character.style.left) + 1 + "px";
        } else if (!isGoingRight && isOnGround) {
            character.style.left = parseFloat(character.style.left) - 1 + "px";
        } else {
            character.style.top = parseFloat(character.style.top) + force + "px";
        }

        setTimeout(moveCharacter, 10);
    }
});

