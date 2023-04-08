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
// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
// loads all characters in the game
window.addEventListener('DOMContentLoaded', function () {
    astronaut = new Spaceman(350, 525);
    alien1 = new Alien(0, 0, alienImg1, 50, 50);
    alien2 = new Alien(200, 0, alienImg2, 50, 50);
    alien3 = new Alien(500, 0, alienImg3, 50, 50);
    alien4 = new Alien(700, 0, alienImg4, 50, 50);
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
    constructor(x, y,) {
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
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.height = height;
        this.width = width;
        this.alive = true;


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
        astronaut.x - 10 >= 0 ? (astronaut.x -= 10) : null;
    } else if (e.key === 'Arrow Right' || e.key === 'd') {
        astronaut.x + 10 <= game.width - astronaut.width ? (astronaut.x += 10) : null;
    } else if (e.key === 'Arrow Up' || e.key === 'w') {
        astronaut.y - 10 >= 0 ? (astronaut.y -= 10) : null;
    } else if (e.key === 'Arrow Down' || e.key === 's') {
        astronaut.y + 10 <= game.height - astronaut.height ? (astronaut.y += 10) : null;
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
    alien1.y += 10;
    alien2.y += 7;
    alien3.y += 5;
    alien4.y += 13;
    // if (alien1.y === game.height) {
    //     alien1.y -= 0;
    // }
}


// ====================== HELPER FUNCTIONS ======================= //
function spawnAlien1() {
    alien1.alive = false;

    setTimeout(function () {
        let randomX = Math.floor(Math.random() * (game.width - 50));
        let zeroY = game.height - 600;
        const alienType = [alienImg1, alienImg2, alienImg3, alienImg4];
        let randomIndex = Math.floor(Math.random() * (alienType.length - 1));
        let randomAlien = alienType[randomIndex];
        alien1 = new Alien(randomX, zeroY, randomAlien, 50, 50)
    }, 1000);
}

function spawnAlien2() {
    if (alien2.not.alive) {
        alien2.render();
    }
}
function spawnAlien3() {
    if (alien3.not.alive) {
        alien3.render();
    }
}
function spawnAlien4() {
    if (alien4.not.alive) {
        alien4.render();
    }
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
    astronaut.render();
    // spaceWalk();
    // plasmaWeapon.render();


    console.log('game loop--------------')

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

        return spawnAlien1();
    } else {
        return false;
    }
}