// GLOBAL DOM / VARIABLES
let astronaut;
let alien1;
let alien2;
let alien3;
let alien4;
const alienImg1 = 
const plasma = document.getElementById('plasmaShot');
const astro = document.getElementById('astroImg');
const game = document.getElementById('game');
const ctx = game.getContext('2d');
// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
// loads all characters in the game
window.addEventListener('DOMContentLoaded', function () {
    astronaut = new Spaceman(350, 525, astro, 75, 75);
    alien1 = new Alien(0, 0, 'yellow', 25, 25);
    alien2 = new Alien(200, 0, 'blue', 25, 25);
    alien3 = new Alien(500, 0, 'red', 25, 25);
    alien4 = new Alien(700, 0, 'green', 25, 25);

    const runGame = this.setInterval(gameLoop, 60);

})
// spaceWalk is a keypress function for the astronaut to move
document.addEventListener('keydown', spaceWalk);

// ====================== SETUP FOR CANVAS RENDERING ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);
// ====================== ENTITIES ======================= //
class Spaceman {
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

class Alien {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width;
        this.alive = true;

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
// still trying to figure this out
class Weapon {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.height = height;
        this.width = width;
        this.speed = -1.5;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y += this.speed, this.width, this.height);
        }
    }
}



// movement function for astronaut
function spaceWalk(e) {
    console.log('walking :', e.key);

    if (e.key === 'Arrow Left' || e.key === 'a') {
        astronaut.x - 10 >= 0 ? (astronaut.x -= 10) : null;
    } else if (e.key === 'Arrow Right' || e.key === 'd') {
        astronaut.x + 10 <= game.width - astronaut.width ? (astronaut.x += 10) : null;
    }
}


//movement for aliens
setInterval(alienWalk, 1000);

function alienWalk() {
    alien1.y += 10;
    alien2.y += 7;
    alien3.y += 5;
    alien4.y += 13;
}


// ====================== HELPER FUNCTIONS ======================= //
function spawnAlien() {

}



// ====================== GAME PROCESSES ======================= //
//Im creating a game loop to keep the hoard coming continuously

function gameLoop() {
    // to clear the canvas
    ctx.clearRect(0, 0, game.clientWidth, game.height);


    if (alien1.alive) {
        alien1.render();
        alien2.render();
        alien3.render();
        alien4.render();
    }
    astronaut.render();
    console.log('game loop--------------')

}
// ====================== COLLISION DETECTION ======================= //
