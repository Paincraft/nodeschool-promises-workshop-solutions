var q = require('q');
var defer = q.defer();

var parsePromised = function(data){
  try{
    var dataParsed = JSON.parse(data);
    defer.resolve(dataParsed);
  }catch(e){
    defer.reject(e);
  }
  return defer.promise;
}


var data = process.argv[2];
parsePromised(data).then(null,console.log);
