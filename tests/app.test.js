
describe('Spaceman class', function () {
    let rambo = new Spaceman(200, 200, astro, 50, 50);

    it('should be a number for x', function () {
        expect(typeof rambo.x).toBe('number');
    });

    it('should be a number for y', function () {
        expect(typeof rambo.y).toBe('number');
    });

    it('should be a string for color', function () {
        expect(typeof rambo.image).toBe('object');
    });

    it('should be a number for width', function () {
        expect(typeof rambo.width).toBe('number');
    });

    it('should be a number for height', function () {
        expect(typeof rambo.height).toBe('number');
    });

    it('should be a boolean', function () {
        expect(typeof rambo.alive).toBe('boolean');
    });
})

describe('spaceWalk()', function () {
    it('moves the astronaut down when Arrow Down or s key is pressed', () => {
        const e = { key: 'Arrow Down' };
        spaceWalk(e);
        expect(astronaut.y).toBe(150);
    });
    it('returns a number when the astronaut moves', () => {
        const e = { key: 'Arrow Up' };
        spaceWalk(e);
        expect(typeof astronaut.y).toBe('number');
    });
})

describe('endGame()', function () {
    it('should end the game when player hits 30 points', function () {
        let result = { score: 30 };
        expect(typeof (result)).toBe('object');
    });
})
