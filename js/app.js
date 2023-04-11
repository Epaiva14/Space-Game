// GLOBAL DOM / VARIABLES
let astronaut;
let alien1;
let alien2;
let alien3;
let alien4;
let plasmaWeapon;
let randomEnemy;
const alienImg1 = document.getElementById('alien1');
const alienImg2 = document.getElementById('alien2');
const alienImg3 = document.getElementById('alien3');
const alienImg4 = document.getElementById('alien4');
const plasma = document.getElementById('plasmaShot');
const astro = document.getElementById('astroImg');
const score = document.getElementById('score');
const game = document.getElementById('game');
const ctx = game.getContext('2d');
const restartButton = document.getElementById('reset');

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
// loads all characters in the game
window.addEventListener('DOMContentLoaded', function () {
    astronaut = new Spaceman(game.height / 2, game.width / 2);
    alien1 = new Alien(0, 0, alienImg1);
    alien2 = new Alien(200, 560, alienImg2);
    alien3 = new Alien(400, 0, alienImg3);
    alien4 = new Alien(600, 560, alienImg4);
    plasmaWeapon = new Weapon(astronaut.x, astronaut.y, plasma, 50, 50);
    const runGame = this.setInterval(gameLoop, 60);
})


// spaceWalk is a keypress function for the astronaut to move
document.addEventListener('keydown', spaceWalk);
// document.addEventListener('keydown', shoot);

// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);
// ====================== ENTITIES ======================= //
class Spaceman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = astro;
        this.height = 75;
        this.width = 75;
        this.alive = true;
        // this.speed = 4;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

class Alien {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.height = 50;
        this.width = 50;
        this.alive = true;
        this.direction = 'down';

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

    }

}
// still trying to figure this out
class Weapon {
    constructor(x, y, image, width, height) {
        this.x = astronaut.x;
        this.y = astronaut.y;
        this.image = image;
        this.height = height;
        this.width = width;
        this.speed = -1.5;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y += this.speed, this.width, this.height);
        }
        this.update = function (x, y) {
            this.x = x + 35;
            this.y = y - 15;
        }

    }
}



// movement function for astronaut
function spaceWalk(e) {
    // console.log('walking :', e.key);

    if (e.key === 'Arrow Left' || e.key === 'a') {
        astronaut.x - 32 >= 0 ? (astronaut.x -= 32) : null;
    } else if (e.key === 'Arrow Right' || e.key === 'd') {
        astronaut.x + 32 <= game.width - astronaut.width ? (astronaut.x += 32) : null;
    } else if (e.key === 'Arrow Up' || e.key === 'w') {
        astronaut.y - 32 >= 0 ? (astronaut.y -= 32) : null;
    } else if (e.key === 'Arrow Down' || e.key === 's') {
        astronaut.y + 32 <= game.height - astronaut.height ? (astronaut.y += 32) : null;
    }
    if (e.key === 'b') {
        console.log('shoot');
        plasmaWeapon.update(astronaut.x, astronaut.y);
        plasmaWeapon.render();
    }
}

// function shoot() {
//     if () {
//         plasmaWeapon.render();
//     }
// }

//movement for aliens
setInterval(alienWalk, 1000);

function alienWalk() {
    if (alien1.y <= 520 && alien1.direction === 'down') {
        alien1.y += 30;
    } else if (alien1.y <= 0 && alien1.direction === 'up') {
        alien1.y += 30;
        alien1.direction = 'down';
    } else {
        alien1.direction = 'up';
        alien1.y -= 30;
    }

    if (alien2.y <= 540 && alien2.direction === 'down') {
        alien2.y += 45;
    } else if (alien2.y <= 0 && alien2.direction === 'up') {
        alien2.y += 45;
        alien2.direction = 'down';
    } else {
        alien2.direction = 'up';
        alien2.y -= 45;
    }

    if (alien3.y <= 540 && alien3.direction === 'down') {
        alien3.y += 40;
    } else if (alien3.y <= 0 && alien3.direction === 'up') {
        alien3.y += 40;
        alien3.direction = 'down';
    } else {
        alien3.direction = 'up';
        alien3.y -= 40;
    }

    if (alien4.y <= 560 && alien4.direction === 'down') {
        alien4.y += 20;
    } else if (alien4.y <= 0 && alien4.direction === 'up') {
        alien4.y += 20;
        alien4.direction = 'down';
    } else {
        alien4.direction = 'up';
        alien4.y -= 20;
    }
}


// ====================== HELPER FUNCTIONS ======================= //
// const newAliens = [];
function spawnAlien1() {
    alien1.alive = false;

    setTimeout(function () {
        let randomX = Math.floor(Math.random() * (game.width - 50));
        let randomY = Math.floor(Math.random() * (game.height - 50));
        const alienType = [alienImg1, alienImg2, alienImg3, alienImg4];
        let randomIndex = Math.floor(Math.random() * (alienType.length - 1));
        let randomAlien = alienType[randomIndex];
        alien1 = new Alien(randomX, randomY, randomAlien, 50, 50)
    }, 1000);
}

function spawnAlien2() {
    alien2.alive = false;

    setTimeout(function () {
        let randomX = Math.floor(Math.random() * (game.width - 50));
        let randomY = Math.floor(Math.random() * (game.width - 50));
        const alienType = [alienImg1, alienImg2, alienImg3, alienImg4];
        let randomIndex = Math.floor(Math.random() * (alienType.length - 1));
        let randomAlien = alienType[randomIndex];
        alien2 = new Alien(randomX, randomY, randomAlien, 50, 50)
    }, 1000);
}

function spawnAlien3() {
    alien3.alive = false;

    setTimeout(function () {
        let randomX = Math.floor(Math.random() * (game.width - 50));
        let randomY = Math.floor(Math.random() * (game.width - 50));
        const alienType = [alienImg1, alienImg2, alienImg3, alienImg4];
        let randomIndex = Math.floor(Math.random() * (alienType.length - 1));
        let randomAlien = alienType[randomIndex];
        alien3 = new Alien(randomX, randomY, randomAlien, 50, 50)
    }, 1000);
}

function spawnAlien4() {
    alien4.alive = false;

    setTimeout(function () {
        let randomX = Math.floor(Math.random() * (game.width - 50));
        let randomY = Math.floor(Math.random() * (game.width - 50));
        const alienType = [alienImg1, alienImg2, alienImg3, alienImg4];
        let randomIndex = Math.floor(Math.random() * (alienType.length - 1));
        let randomAlien = alienType[randomIndex];
        alien4 = new Alien(randomX, randomY, randomAlien, 50, 50)
    }, 1000);
}



// ====================== GAME PROCESSES ======================= //
//Im creating a game loop to keep the hoard coming continuously

function gameLoop() {
    // to clear the canvas
    ctx.clearRect(0, 0, game.clientWidth, game.height);


    if (alien1.alive) {
        alien1.render();
        let hit = detectHit(astronaut, alien1);
    }
    if (alien2.alive) {
        alien2.render();
        let hit = detectHit2(astronaut, alien2);
    }
    if (alien3.alive) {
        alien3.render();
        let hit = detectHit3(astronaut, alien3);
    }
    if (alien4.alive) {
        alien4.render();
        let hit = detectHit4(astronaut, alien4);
    }
    astronaut.render();
}
// ====================== COLLISION DETECTION ======================= //

function detectHit(player, opponent) {
    let hitTest = (player.y + player.height > opponent.y &&
        player.y < opponent.y + opponent.height &&
        player.x + player.width > opponent.x &&
        player.x < opponent.x + opponent.width
    );

    if (hitTest) {
        // add 1 point to current score
        let newScore = Number(score.textContent) + 1;
        score.textContent = newScore;

        if (newScore >= 30) {
            clearInterval(intervalTimer);
            endGame();
        }
        return spawnAlien1()

    } else {
        return false;
    }
}

function detectHit2(player, opponent) {
    let hitTest = (player.y + player.height > opponent.y &&
        player.y < opponent.y + opponent.height &&
        player.x + player.width > opponent.x &&
        player.x < opponent.x + opponent.width
    );

    if (hitTest) {
        // add 1 point to current score
        let newScore = Number(score.textContent) + 1;
        score.textContent = newScore;

        if (newScore >= 30) {
            clearInterval(intervalTimer);
            endGame();
        }
        return spawnAlien2()
    } else {
        return false;
    }
}
function detectHit3(player, opponent) {
    let hitTest = (player.y + player.height > opponent.y &&
        player.y < opponent.y + opponent.height &&
        player.x + player.width > opponent.x &&
        player.x < opponent.x + opponent.width
    );

    if (hitTest) {
        let newScore = Number(score.textContent) + 1;
        score.textContent = newScore;

        if (newScore >= 30) {
            clearInterval(intervalTimer);
            endGame();
        }

        return spawnAlien3()

    } else {
        return false;
    }
}
function detectHit4(player, opponent) {
    let hitTest = (player.y + player.height > opponent.y &&
        player.y < opponent.y + opponent.height &&
        player.x + player.width > opponent.x &&
        player.x < opponent.x + opponent.width
    );

    if (hitTest) {
        // add 1 point to current score
        let newScore = Number(score.textContent) + 1;
        score.textContent = newScore;

        if (newScore >= 30) {
            clearInterval(intervalTimer);
            endGame();
        }

        return spawnAlien4()
    } else {
        return false;
    }

}

//=========================BUTTONS & END GAME======================//
const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    //to start the timer, and register endgame status
    startGame();
    console.log('START GAME BUTTON', startButton);
});


restartButton.addEventListener('click', function () {
    score.textContent = 0;
});


let countDownTime = 30; // 30 seconds countdown

function startGame() {
    intervalTimer = setInterval(function () {
        countDownTime -= 1;
        timer.textContent = countDownTime;

        if (countDownTime <= 0) {
            clearInterval(intervalTimer);
            endGame();
        }
    }, 1000);

    spawnAlien1();
    spawnAlien2();
    spawnAlien3();
    spawnAlien4();
}

function endGame() {
    // determine the winner
    let winner;
    if (Number(score.textContent) >= 30) {
        winner = "Player";
        alert(`${winner} wins!`);
    } else {
        alert(`You failed to collect the Specimens in time!`);
    }

    // display the winner and end the game
    document.location.reload();
}
