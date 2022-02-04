let Display1 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Hello One!");
    resolve("1");
  },2000);
});
let Display2= new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log("Hello Two!");
      resolve("2");
    },2000);
});
let Display3 = new Promise(function(resolve,reject){
     setTimeout(()=>{
      console.log("Hello Three!");
      resolve("3");
     },2000);
});
let Display4 = new Promise(function(resolve,reject){
     setTimeout(()=>{
      console.log("Hello Four!");
      resolve("4");
     },2000);
});
let Display5 = new Promise(function(resolve,reject){
     setTimeout(()=>{
      console.log("Hello Five!");
      resolve("5");
     },2000);
});


Promise.all([Display1,Display2,Display3,Display4,Display5]).then(function(result){
  console.log("All task are ready!");
}).catch(error => {
  console.error(error.message)
});







