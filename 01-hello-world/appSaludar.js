function hello(name){           // 1- declarates the function
    let msg = `Hello ${name}`;  // 3 the function code is executed
    return msg;                
}

let salute = hello('Merquel');  // 2 executes the function and the function code is executed.
                                // 4 the return of the function is stored in salute
console.log(salute);            // 5  shows the value of salute