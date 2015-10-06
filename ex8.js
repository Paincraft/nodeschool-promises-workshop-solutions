var q = require('q');
var defer = q.defer();

var throwMyGod = function(){
  throw new Error("OH NOES");
}

var iterate = function(number){
  console.log(number);
  return number+1;
}

q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,console.log);
