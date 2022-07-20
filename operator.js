/* Rest operator
    ... represents rest operator
    */

function sum(name,...args){
  document.write(`hello ${name}:`);

  let sum = 0;
  for(let i in args){
    sum += args[i];
  }
  document.write(sum);
  
}

sum ("Aatika",23,34,95);