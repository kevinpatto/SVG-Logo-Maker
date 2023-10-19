const { Triangle, Circle, Square } = require('../shapes');

const testTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="70,180 230,180 150,20" fill="red"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;

const testCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#DD00DD">SVG</text>
</svg>`;

const testSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="#666666"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">POO</text>
</svg>`;

describe('Shape', () => {
    describe('Triangle', () => {
        it('should be equal to testTriangle when render() is invoked', () => {
            expect(new Triangle('svg', 'white', 'red').render()).toBe(testTriangle);
        });
    });
    describe('Circle', () => {
        it('should be equal to testCircle when render() is invoked', () => {
            expect(new Circle('svg', '#DD00DD', 'green').render()).toBe(testCircle);
        });
    });
    describe('Square', () => {
        it('should be equal to testSquare when render() is invoked', () => {
            expect(new Square('pOO', 'green', '#666666').render()).toBe(testSquare);
        });
    });
});