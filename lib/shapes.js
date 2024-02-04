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
        return `<polygon points="60,0 0,90 125,90" fill='${this.color}' />`;
    }
 }
 class Circle extends Shape {
    render() {
        return `<circle cx='60' cy='60' r='50' fill='${this.color}' />`;
    }
 }
 class Square extends Shape {
    render() {
        return `<rect x='10' y='10' width='100' height='100' fill='${this.color}' />`;
    }
 }

 const _Triangle = Triangle;
export { _Triangle as Triangle };
 const _Circle = Circle;
export { _Circle as Circle };
 const _Square = Square;
export { _Square as Square };