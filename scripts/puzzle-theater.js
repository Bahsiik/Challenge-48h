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

// make character move every 10ms

let isOnGround = false;
let isGoingRight = true;

addEventListener("load", () => {
    const character = document.getElementById("character");
    let grounds = document.getElementsByClassName("blocSolo");
    let tree = document.getElementById("tree");
    console.log(tree);

    character.style.left = "0px";

    console.log(character.getBoundingClientRect().right);
    console.log(tree.getBoundingClientRect().left);
    console.log(Math.round(character.getBoundingClientRect().bottom));
    console.log(Math.round(tree.getBoundingClientRect().bottom));

    moveCharacter();

    function moveCharacter() {
        for (let i = 0; i < grounds.length; i++) {
            if (character.getBoundingClientRect().bottom >= grounds[i].getBoundingClientRect().top) {
                isOnGround = true;
            }
        }

        if (!isOnGround) {
            character.style.top = character.getBoundingClientRect().top + 0.1 + "px";
        }

        if (character.getBoundingClientRect().right >= tree.getBoundingClientRect().left && Math.round(character.getBoundingClientRect().bottom) === Math.round(tree.getBoundingClientRect().bottom)+1 || character.getBoundingClientRect().right >= window.innerWidth) {
            isGoingRight = false;
        }
        //
        // if (character.getBoundingClientRect().left <= 0 || ) {
        //     isGoingRight = true;
        // }

        if (isGoingRight) {
            character.style.left = parseFloat(character.style.left) + 1 + "px";
        } else {
            character.style.left = parseFloat(character.style.left) - 1 + "px";
        }

        setTimeout(moveCharacter, 10);
    }
});

