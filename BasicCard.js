// fs package is required if I want to save card data in a text file.
// var fs  = require('fs');

// Basic Card Constructor START
function basicCard (front, back) {
  this.front = front;
  this.back = back;
} // Basic Card Constructor CLOSE

// exports the Basic Card Constructor function
module.exports = basicCard;
