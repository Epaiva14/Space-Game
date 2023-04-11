# Space-Game
This game has had alot of changes, and will continue to have changes. I so far am enjoying the process it has gone through, and I will say I really do enjoy the foresight i have for its future. 


My first impression of the game was this, to start simple and clean, and give myself time to brainstorm the different ways i would start this process.
![Excalidraw example](img/Desktop%20Screenshot%202023.04.01%20-%2020.46.20.11.png)

## Getting Started

1. ```Fork``` and ```Clone``` this repository to your local machine
2. Open ```index.html``` in your browser to play


credit:
I have obtained the background image from opengameart.org.
I also have obtained the canvas background from a google search, credit goes to Shames JCC, @ shamesjcc.org.
All other sprites were created by myself alone.

## Techniques used ~~~~
This was to be created using HTML, CSS, and Javascript. Most of my code was written using JS but I did have some good use out of html and css to make things easier for me. This was my first game project using JS and i had a ton of fun doing it. I ran into a few problems but it worked out in the end.

I had created a canvas in html for the play area of the game. Aside from that, i had used a bunch of aside tags to try and give content and buttons around the play area.
```HTML
    <div id="playarea">
        <aside id="top-left">
            <p id="timer"></p>
            <h2 id="score">0</h2>
        </aside>
        <h1 id="gameTitle">Collect the Specimens before time runs out!</h1>
        <aside id="startButton">
            <button id="start">Start Game</button>
        </aside>
        <aside id="resetButton">
            <button type="reset" id="reset">Reset Score</button>
        </aside>
        <aside id="top-right">
            <ul id="directions">
                <li>Use W-A-S-D to move</li>
                <hr>
                <li>Collect 30 Specimen in 30 Seconds to Win</li>
            </ul>
        </aside>
        <canvas id="game"><!-- this is where the game is played --></canvas>
    </div>
```

I used classes to separate the aliens and the astronaut.
```JS
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
```
Creating movement for the astronaut was easy, since i had to pretty much make everything manual according to what button was pressed.

As for the aliens? I had struggled trying to find the right lines of code and what x or y axis location i wanted the aliens to move about the screen, without disappearing competely.

The function below is registered for one of the aliens, as there are 4 in the game.

```JS
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
```
Anytime an alien died, I had a function for each respawn.
```js
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
```
Detect Hit function was used to collect the aliens, and a function called gameLoop helped continue the games process.

```js
function gameLoop() {
    // to clear the canvas
    ctx.clearRect(0, 0, game.clientWidth, game.height);
    if (alien1.alive) {
        alien1.render();
        let hit = detectHit(astronaut, alien1);
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
```

lastly, with CSS, I ended up having fun saving it for last. It is probably still my weakest link in coding. I was enjoying playing around with the different styles. I still have alot more to learn, but heres a few things i was able to enjoy using.

```CSS
canvas {
    background-image: url(./img/space-asteroid-surface-planet-with-craters-surface-space-planets-landscape-comet-crater-cartoon-illustration_102902-834.jpg);
    display: block;
    width: 756px;
    height: 600px;
    grid-column-start: 4;
    background-color: #222;
    box-shadow: 40px 45px 70px 10px rgb(30, 137, 186);
    border-radius: 10px;
    border: outset;
    border-width: medium;
}
```

I thought the box shadow is a really cool feature! It gives the canvas a pop out feature. All thanks to my instructor Avisa! Aside from all of that, I had used a ton of ```display: grid;```. I find that much easier to use than flex, but I would like to practice with either to get a better understanding of both of them.

Well? Try to collect each alien within 30 seconds, I made it a little easier, but challenging. My first few go's without any tweaks was nearly impossible, but as soon as i was able to beat my own game several times, I recognized that it was a playable and enjoyable AND challenging game.

The only other ideas i have for the future, are to implement different weapons, and give the aliens different motions. Where if i could make the aliens move away from the astronaut, or if the astronaut could use some kind of grabbing mechanism with a weapon of some sort. Maybe add lives, or add a jar to show all the aliens being collected into the jar. These are all ideas I have thought about and maybe I can implement into the future.

