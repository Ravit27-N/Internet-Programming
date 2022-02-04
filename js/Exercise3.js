
async function helloWorld() {
 let result= await new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve("Hello World!");
   },5000);
 })
 return result;
}

helloWorld().then(function(res1){
  console.log(res1);
})

