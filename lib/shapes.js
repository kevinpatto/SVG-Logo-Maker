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

    render() {
        if (this.text.length > 3 || !this.text) {
            throw new Error('your text cannot exceed three letters or be blank');
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.generateShape()}
    ${this.generateText()}
</svg>`
    }

    writeToFile() {
        fs.writeFile(`examples/${this.text}logo.svg`, this.render(), (err) => err ? console.log(err) : console.log('success'));
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'triangle';
    }

    generateShape() {
        return `<polygon points="70,180 230,180 150,20" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'circle';
    }

    generateShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'square';
    }

    generateShape() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };