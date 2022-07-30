/* Symbol is a data type 
   if we want to use a unique value in 
   programming,we can use data type symbol */

   let id = Symbol("Hello");

   console.log(id);
   console.log(typeof id);

/*    for using symbol in document we use 
    toString() method */
                    
    document.write(id.toString(),"<br><br><br>");

/* we want to  see the value of symbol we simply
     use description method */
     
    document.write(id.description,"<br><br><br>");
    

// using symbol with object 

let age = Symbol("age");

let user = {
    name : 'Ali',
    class : 'Btech'
};

user[age] = 22;

console.log(user);
console.log(user[age]);
document.write(JSON.stringify(user));