 class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
 }

 //Individual shape classes
 class Triangle extends Shape {
    render() {
        return `<polygon points="80,5 5,125 155,125" fill='${this.color}' />`;
    }
 }
 class Circle extends Shape {
    render() {
        return `<circle cx='100' cy='100' r='90' fill='${this.color}' />`;
    }
 }
 class Square extends Shape {
    render() {
        return `<rect x='10' y='10' width='100' height='100' fill='${this.color}' />`;
    }
 }

 module.exports.Triangle = Triangle;
 module.exports.Circle = Circle;
 module.exports.Square = Square;