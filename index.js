var colors = require('colors');

(function(){
  console.log("Module charged" .green);
})()

function errMsg(msg){
  if(!msg) return console.log("Oops, an error occured !" .red);
  console.log(msg .red);
}

function saySomething(msg){
  if(!msg) return new Error("Oops, please provide a message !" .red);
  console.log(`${msg}` .blue);
}

module.exports = {
	errMsg,
	saySomething
}