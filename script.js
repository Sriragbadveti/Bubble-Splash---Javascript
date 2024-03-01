var hitRn = 0;
function makeBubble() {

    let clutter = "";

    for (var i = 1; i <= 200; i++) {
        var math = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${math}</div>`;
    }

    document.querySelector(".rbottom").innerHTML = clutter;
};

var count = 60;
function countdown() {
    var mela = setInterval(function () {
        if (count > 0) {
            count--;
            document.querySelector("#timer").textContent = count;
        } else {
            clearInterval(mela);
            document.querySelector(".rbottom").textContent = "Thankyou for playing the game";
        }



    }, 1000);
}

function newHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitter").textContent = hitRn;
}

var score = 0;
function scoreIncrease() {
    score += 10;
    document.querySelector("#lastbox").textContent = score;
}

document.querySelector(".rbottom").addEventListener("click", (details) => {
    let clickedNumber = (Number(details.target.textContent));
    if (clickedNumber == hitRn) {
        scoreIncrease();
        newHit();
        makeBubble();
    }
})
countdown();
makeBubble();
newHit();
