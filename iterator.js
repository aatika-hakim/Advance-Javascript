let num = [100,200,300];

let iter = num[Symbol.iterator]();

iter.next();
console.log(iter.next());