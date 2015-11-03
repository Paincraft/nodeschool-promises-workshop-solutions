var q = require('q');
var promise1 = q.defer();
var promise2 = q.defer();

var all = function(p1,p2){
  var counter = 0;
  var internal = q.defer();
  var valueP1 = "";
  var valueP2 = "";
  p1.then(function(val){
    ++counter;
    valueP1 = val;
    if(counter === 2)
      internal.resolve([valueP1,valueP2]);
  },function(err){
    internal.reject();
  }).done();

  p2.then(function(val){
    ++counter;
    valueP2 = val;
    if(counter === 2)
      internal.resolve([valueP1,valueP2]);
  },function(err){
    internal.reject();
  }).done();
  return internal.promise;
}

all(promise1.promise,promise2.promise).then(console.log);

setTimeout(function(){
  promise1.resolve("PROMISES");
  promise2.resolve("FTW");
},200);
