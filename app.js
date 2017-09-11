// requires other js files and inquirer
var bC = require('./BasicCard.js');
var cC = require('./ClozeCard.js');
var inquirer = require('inquirer');

//requires command prompt arg
var input = process.argv[2];


// START APP
// *******

createFlashcard();

// *******


// Create Either Flashcard Depending on arg input START
function createFlashcard() {

  if (input === 'basic'){
    basicCreation();
  } else if (input === 'cloze') {
    clozeCreation();
  } else {
    console.log("****ERROR: Unknown Command****")
    console.log("Please try again with 'basic' or 'cloze'");
  }


} // Create either flashcard depending on arg input CLOSE


// Basic Flashcard Creation START
function basicCreation() {
  inquirer.prompt([

  {
    type: "input",
    name: "front",
    message: "Enter the front of the Card.",
  }, {
    type: "input",
    name: "back",
    message: "Enter the back of the Card.",
  }

]).then(function (answers) {

    var basicFlashCard = new bC(answers.front, answers.back);

    console.log("***********");
    console.log("***********");
    console.log("BASIC FLASHCARD")
    console.log(basicFlashCard);
    console.log("");
    console.log("Front: " + basicFlashCard.front);
    console.log("Back: " + basicFlashCard.back);
    console.log("***********");
    console.log("***********");

  });

} // Basic Flashcard Creation CLOSE


// Cloze Flashcard Creation START
function clozeCreation() {
  inquirer.prompt([

  {
    type: "input",
    name: "text",
    message: "Enter the Full Text.",
  }, {
    type: "input",
    name: "cloze",
    message: "Enter the 'answer' in the Full Text that you would like to hide.",
  }

]).then(function (answers) {

    var clozeFlashCard = new cC(answers.text, answers.cloze);

    console.log("***********");
    console.log("***********");
    console.log("CLOZE FLASHCARD")
    console.log(clozeFlashCard);
    console.log("");
    console.log("Full Text: " + clozeFlashCard.fullText);
    console.log("Cloze: " + clozeFlashCard.cloze);
    console.log("Partial Text: " + clozeFlashCard.partial);
    console.log("***********");
    console.log("***********");

  });
} // Cloze Flashcard Creation CLOSE
