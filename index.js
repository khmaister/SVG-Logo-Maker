// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

// Input Prompts
async function main() {
    try {
      const answers = await inquirer.prompt([
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
      const 

    }     
}
