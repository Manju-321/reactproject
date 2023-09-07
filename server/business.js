// var express = require("express");
// var cors = require("cors");
// var mongoclint = require("mongodb").MongoClient;

// var app = express();

// app.get("/",(request,response)=>{
//     response.send("<h2>API HOME</h2>");
// });
// app.get("/products",(request,response)=>{
//     response.send([{Name:"TV",Price:9874100},{Name:"Mobile",Price:777744100}]);
// });

// app.get("/categories",(req,res)=>{
//     res.send(`
//       <Categories>
//         <Category>
//            <Id>1</Id>
//            <Name>Electronics</Name>
//         </Category>
//       </Categories>
//     `);
// });

// app.get("/details/:id/:name",(req,res)=>{
//   res.send(`
//     Id:${req.params.id}<br>
//     Name:${req.params.name}<br>
//     Price:${req.params.price}
//   `);
// });

// app.get("*",(req,res)=>{
//     res.send("Requested Path Not Found");
// });


// app.listen(5000);
// console.log(`server started : http://127.0.0.1:5000`)




var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();

app.get("/",(request,response)=>{
  response.send("<h2>API HOME</h2>");
});

app.get("/products",(res,req)=>{
  response.send([{Name:"Apple",Price:"987400"}]);
});

app.get("*",(res,req)=>{
  response.send("Request path not found");
});

app.listen(5000);
console.log(`server sterted : http://127.0.0.1:5000`);