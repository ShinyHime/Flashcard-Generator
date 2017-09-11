// fs package is required if I want to save card data in a text file.
// var fs  = require('fs');

// Cloze Card Constructor START
function clozeCard (text, cloze) {

  //for the cloze arguement
  this.fullText = text;

  this.cloze = cloze;

  this.partial = text.replace(cloze, "...");

} // Cloze Card Constructor CLOSE

module.exports = clozeCard;
