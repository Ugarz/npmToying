var colors = require('colors');

function printMsg(){
  console.log("Hey, c'est un message du module !" .red);
}

function printGreen(msg){
  console.log(msg .green);
}

module.exports = {
	printMsg,
	printGreen
}