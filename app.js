// GLOBAL DOM / VARIABLES
let astronaut;
let alien1;
let alien2;
let alien3;
let alien4;
const astro = document.getElementById('astroImg');
const game = document.getElementById('game');
const ctx = game.getContext('2d');
// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    astronaut = new spaceMan()

})
// ====================== SETUP FOR CANVAS RENDERING ======================= //

// ====================== ENTITIES ======================= //
class spaceMan {
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
// ====================== HELPER FUNCTIONS ======================= //

// ====================== GAME PROCESSES ======================= //
//Im creating a game loop to keep the hoard coming continuously

function gameLoop() {
    //this will be rectangle for now, but plan to change img
    ctx.clearRect(0, 0, game.clientWidth, game.height);


}
// ====================== COLLISION DETECTION ======================= //