const fs = require('fs');

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shape = 'polygon';
        this.shapeColor = shapeColor;
    }

    generateShape() {
        // TO BE OVERWRITTEN
    }

    generateText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    writeToFile() {
        fs.writeFile(
            `${this.text}logo.svg`,
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${generateShape()}
    ${generateText()}
</svg>`,
            (err) => console.log(err)
        );
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'triangle';
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'circle';
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'square';
    }
}

module.exports = { Triangle, Circle, Square }