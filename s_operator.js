// use of spread operator in functions

function sum(name,...args){
    document.write(`hello ${name}: `);
  
    let sum = 0;
    for(let i in args){
      sum += args[i];
    }
    document.write(sum + "<br>");
    
  }
  
  var arr =[123,34,95];
  sum ("Aatika",...arr);
  
// concating two arrays by using spread opreator
  var arr1 = [34,79,85,4]
  var arr2 = [23,543,45]

  var arr3 = [...arr1,...arr2]

  document.write(arr3 + "<br>");


// spread operator in object

var obj1 = {
    name : "Aatika"
};

var obj2 = {
    age : 17
};

var obj3 = {
    ...obj1,...obj2
};

console.log(obj3);













