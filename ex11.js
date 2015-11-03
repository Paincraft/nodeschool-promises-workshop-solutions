var Qio = require("q-io/http");

Qio.read("http://localhost:7000").then(
  function(data){
    return Qio.read("http://localhost:7001/"+data);
  }
).then(function(data){
    console.log(JSON.parse(data.toString()));
  }).then(null,console.error).done();
