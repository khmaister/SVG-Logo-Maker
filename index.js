// requirements
import { Triangle, Circle, Square } from './lib/shapes.js';
//import { prompt } from "inquirer";
import { writeFileSync } from 'fs';
import pkg from 'inquirer';
const {prompt} = pkg

// Input Prompts
async function main() {
    try {
      const answers = await prompt([
        {
          type: "input",
          name: "text",
          message: "Enter up to three characters for the text: ",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter the text color (keyword or hexadecimal): ",
        },
        {
          type: "list",
          name: "shape",
          message: "Select a shape:",
          choices: ["Triangle", "Circle", "Square"], 
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter the shape color (keyword or hexadecimal): ",
        },
      ]);
      const { text, textColor, shape, shapeColor } = answers;
      let logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
      if (shape === "Triangle") {
        let triangle = new Triangle();
        triangle.setColor(shapeColor);
        logo += triangle.render();
      } else if (shape === "Circle") {
        let circle = new Circle();
        circle.setColor(shapeColor);
        logo += circle.render();
      } else if (shape === "Square") {
        let square = new Square();
        square.setColor(shapeColor);
        logo += square.render();
      }
      logo += `<text x="60" y="75" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      writeFileSync('logo.svg', logo);
      console.log('Generated logo.svg');

    } catch (error) {
        console.log('an error has occurred', error)
    };     
};

main()
