var q = require('q');
var defer = q.defer();

var Error = function(val){
  this.message = val;
}

defer.promise.then(null,function(error){console.log(error.message)});

setTimeout(defer.reject, 300, new Error("REJECTED!"));
