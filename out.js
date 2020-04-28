
const m = require("./dist/Personal-Site-Front-End/server/main");
// ls = m.appAndHandle();
// app = ls[0];
// handle = ls;

// console.log("handle " + m.handle);

// console.log("handle2 " + m.handle2);


// handle({path : "/blog"}, {}).then((res) => {console.log(res.body.indexOf("Pooria Poorsarvi Tehrani's Blog") >= 0)});
// m.handle3({requestContext:{http:{path:"/blog"}}}, {}).then((res) => {console.log(res.body.indexOf("Pooria Poorsarvi Tehrani's Blog") >= 0)});
m.handle3({requestContext:{http:{path:"/assets/img/kindney_background.jpg"}}}, {}).then((res) => {console.log(res)});


// m.handle2({path : "/main-es2015.8af627d2c243d5037315.js"}, {}).then((res) => {console.log(res.body.indexOf(`_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,`) >= 0)});

// app.runMiddleware('main-es2015.8af627d2c243d5037315.js', {connection: {}},(_, body) => {
//   console.log(body);
// });


// var a = function(){
//   console.log("a");
// }


// var c = function(a){
//   var d = function(){
//     a();
//   }
//   return d;
// }

// var b = c(a);
