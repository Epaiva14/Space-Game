
describe('Reset Score', function () {
    //     it('Should reset the score Attribute', function () {
    //         const button = document.getElementById('reset');
    //         button.click();
    //         expect(button.id).toEqual('reset');
    //     });
    // })

    describe('Spaceman class', function () {
        let rambo = new Spaceman(200, 200, astro, 50, 50);

        it('should be a number for x', function () {
            expect(typeof rambo.x).toBe('number');
        });

        it('should be a number for y', function () {
            expect(typeof rambo.y).toBe('number');
        });

        it('should be a string for color', function () {
            expect(typeof rambo.color).toBe('string');
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