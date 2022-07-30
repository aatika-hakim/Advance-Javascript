/* Async function is used in place of Promise function
it works in asynchrons mode (in background) */

// let test = async () => "hello";

// test().then((result) => {
//     console.log(result);
// });

//  Await method 

async  function test (){
    try{  const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json();
  
      return users;
  }catch(error){
      console.log(error);
  }
  }
  
  test().then((res) => {
      console.log(res);
  });