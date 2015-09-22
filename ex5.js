var q = require('q');
var defer = q.defer();

var attachTitle = function(val){
  return "DR. " + val;
}

defer.promise.then(attachTitle).then(console.log);

defer.resolve("MANHATTAN");
