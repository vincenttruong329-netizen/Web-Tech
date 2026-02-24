// For loop
    // statement 1 is executed before the loop(the code block) starts;
    // statement 2 defines the condition for running the loop(the code block);
    // statement 3 is executed after the loop(the code block) has been executed.
                // for(statement 1; statement 2; statement 3){
                // 		code block to be executed
                // }
            
    // Example
        let fruits = ["apple", "banana", "pear", "peach"];

        for(let i=0; i < fruits.length; i++){
            console.log(fruits[i]);
        }

// While Loop
    let j = 0;
    while(j < fruits.length){
        console.log(fruits[j]);
        j++;
    }
		
// Do-While loop		
    let i = 0;
    do{
            console.log(fruits[i]);
            i++;
    }
    while(i < fruits.length);


// for in over objects

    // Syntax:
        // for (key in object) {
        //     // code block to be executed
        // }
    
        // const person = {fname:"John", lname:"Doe", age:25};
        
        // for (let key in person) {
        //     console.log(key + ":"+ person[key]);
        // }
            
    // Explanation:
        // ★ The for in loop iterates over a person object
        // ★ Each iteration returns a key
        // ★ The key is used to access the value of the key
        // ★ The value of the key is person[key]
        // for in over arrays

    // Syntax:
    // 		for (variable in array) {
    //  				code
    // 		}
            
    // Example
        const numbers = [45, 4, 9, 16, 25];

        for (let x in numbers) {
            console.log(numbers[x]);
        }
            
    // ★ Typically, for...in is used to iterate over the properties of an object.
    // ★ While it does work for arrays, the more standard approach for arrays is for...of or an array method like forEach(), which gives you direct access to the element values:



// for...of (this loops thorugh the values of an iterable object)
    // variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
     // iterable - An object that has iterable properties.
        const cars = ["BMW", "Volvo", "Mini"];

        for (let car of cars) {
            console.log(car)
        }



        let language = "JavaScript";

        for (let letter of language) {
            console.log(letter);
        }


// break and continue
    // break
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        console.log("The number is " + i);
    }
    // continue
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        console.log("The number is " + i);
    }
