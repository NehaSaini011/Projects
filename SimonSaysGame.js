let gameSeq = [];  // stores the correct game pattern
let userSeq = [];  // stores the user's clicked pattern

let btns = ['yellow', 'red', 'purple', 'green']; // class names must match CSS
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start the game on first keypress
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        levelUp(); // start first level
    }
});

// Function to make a button "flash" (visual feedback)
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

// Generate the next sequence and show it
function levelUp() {
    userSeq = []; // clear user input for the new level
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
let randColor = btns[randIdx];
gameSeq.push(randColor); // add to the sequence

// Now flash the entire sequence in order
let delay = 0;
for (let color of gameSeq) {
    let btn = document.querySelector(`.${color}`);
    setTimeout(() => btnFlash(btn), delay);
    delay += 600; // wait before next flash
}

    console.log("Game sequence:", gameSeq);
}

// Handle user's button press
function btnPress() {
    let btn = this;
    btnFlash(btn);

    // Get the color class (it's the second class on the element)
    let userColor = btn.classList[1];
    userSeq.push(userColor);

    console.log("User sequence:", userSeq);
    checkAnswer(userSeq.length - 1);
}

// Check the user's input against the game sequence
function checkAnswer(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            // All inputs correct — go to next level after a delay
            setTimeout(levelUp, 1000);
        }
    } else {
        // Wrong input — game over
        h2.innerText = `Game Over at Level ${level} — Press Any Key to Restart`;
        document.body.classList.add("game-over");
        setTimeout(() => document.body.classList.remove("game-over"), 200);
        
        resetGame();
    }
}

// Restart the game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// Attach event listeners to all colored buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
