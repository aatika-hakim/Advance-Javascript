function prom(a, b){
   return new Promise(function(resolve,reject){
    console.log("Fetching data, Please wait.")
let c = a/b;
console.log(c);
    setTimeout(() => {
        if(a/b){
            resolve("Success");
        }
        else{
            reject("Failure");
        }
    },1000)
 });
}

 let onSucces =(result) => {
    console.log(result);
 } 

 let onReject =(error) => {
    console.log(result);
 } 

prom(12,2).then(onSucces);
prom(12,2).catch(onReject);