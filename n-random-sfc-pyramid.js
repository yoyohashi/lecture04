var nRandomSFCPyramid = 0;
while(nRandomSFCPyramid < 10){
var randomSFCPyramid = function(n){
  var message = "";
  var counter = 0;

  while(counter < n){
    message = message + "SFC ";
    counter = counter + 1;
  }
  return message;
};

var output;
var counter = 0;
var number = 1;
var n = Math.random() * 100;
Math.floor(n);

while(counter < n){
  output= randomSFCPyramid(number);
  console.log(output);
  number = number + 1;
  counter = counter + 1;
}
nRandomSFCPyramid = nRandomSFCPyramid + 1
}
