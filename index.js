var colors = require('colors');

(function(){
  console.log("Module charged" .green);
})()

function errMsg(){
  console.log("Oops, an error occured !" .red);
}

function saySomething(msg){
  console.log(`${msg}` .blue);
}

module.exports = {
	errMsg,
	saySomething
}