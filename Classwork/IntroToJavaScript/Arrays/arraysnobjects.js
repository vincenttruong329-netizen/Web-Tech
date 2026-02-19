// Array Properties & Methods
    // Sort() Method:
        let cars = ["Toyota", "Honda", "Ford", "BMW"];
        //The length property returns the number of elements
        let carLength = cars.length;
        // the sort() method sorts the array alphabetically (A -> Z)
        let carsSort = cars.sort();
        console.log(carsSort);

    // Pop() Method (removes & returns the last element from an array):
        let cars1=["BMW", "Volvo", "Saab"];
        console.log("Before pop");
        console.log(cars1);
        cars1.pop();
        console.log("After pop");
        console.log(cars1);

    // Push() method (adds a new element to an array at the end):
        let cars3=["BMW", "Volvo", "Saab"];
        cars3.push("Honda");

    // Unshift() method adds a new element to an array at the beginning:
        let cars4=["BMW", "Volvo", "Saab"];
        cars4.unshift("Nissan");

    // Shift() method removes & returns the first element from an array:
        let cars5=["BMW", "Volvo", "Saab"];
        cars5.shift();

// Types of For loops:
    // ForEach() loop is best used for simple iterations. 
    // It iterates through each element in an array & runs a function on each item.
        cars.forEach((car)=>{
            console.log(car);
        })

    // For loop (this is the classic loop)
        let fruits = ["Apple", "Banana", "Cherry"];
        for (let i = 0; i< fruits.length; i++){
            console.log(fruits[i]);
        }

    // For...of Loop (best for simplicity)
        for(let car of cars){
            console.log(car);
        }

    // Accessing Index in forEach()
        let text ="<ul>";                           // this is creating a string
        for (let i = 0; i < fruits.length; i++){
            text += "<li id='de'>" + fruits[i] + "</li>";
        }
        text += "<ul>";

        document.getElementById("demo2").innerHTML = text;

    // using forEach()
        fruits.forEach((fruit,index) =>{
            text += "<li id='de'>" + fruit + "</li>";
        });
        text+=" </ol>";
        document.getElementById("demo2").innerHTML =text;

        // adding index to an html list (also uses backticks)
        fruits.forEach((fuit, index)=>{
        // both of the methods separated by the "-------------" do the same thing
        console.log(`Index ${index}: ${fruit}`);
        console.log("-------------");
        console.log("Index " + index + ": " + fruit);
    });


// javascript objects
    // object literals
    person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: false
        };
    console.log(person); 

    // new Object() constructors
    let car = new Object();
        car.brand = "Toyota";           
        car.model = "Corolla";
        car.year = 2022;
    console.log(car)


    // you can access object properties by using dot notation & bracket notation
        //Dot Notation (Recommended)
        car.brand;
        
        or
        //Bracket Notation (Useful for Dynamic Keys)
        car["brand"]
    

    // add a new property
        person.email = "john@example.com";
        console.log(person.email); // Output: john@example.com
			
    // modifying an Existing Property
        person.age = 35;
        console.log(person.age); // Output: 35
			
    // deleting a Property
        delete person.isStudent;
        console.log(person.isStudent); // Output: undefined

    // object methods:
        // basic object methods:
        let car = {
            brand: "Toyota",
            model: "Corolla",
            year: 2022,
            
            // Method inside the object
            getCarInfo: function() {
            return "Car: " + this.brand + " " + this.model + ", Year: " + this.year;
            }
        };
        console.log(car.getCarInfo());  // Output: Car: Toyota Corolla, Year: 2022
        
        // adding a method to an exisiting object
        let person = {                  // creating my object
			    firstName: "Alice",
                lastName: "Doe",
			    age: 25,
                isStudent: false,

                getPersonInfo: function(){
                    return "firstName: " + this.firstName + " " + "LastName: " + this.lastName;
                }
			};

            console.log(person.getPersonInfo()); // this calls the function and prints out the text to the console
			
			// Adding a method after object creation
			person.greet = function() {         // creates a function named "person.greet()"
			    return "Hello, my name is " + this.name;
			};
			
			console.log(person.greet());  // Output: Hello, my name is Alice
			
    // object constructors:
        function Person(name, age) {
		    this.name = name;
		    this.age = age;
		}
		
		// Creating objects using the constructor
		let person1 = new Person("Alice", 25);
		let person2 = new Person("Bob", 30);
		
		console.log(person1.name); // Output: Alice
		console.log(person2.age);  // Output: 30

    // adding methods to a constructor
        function Person(name, age) {
                this.name = name;
                this.age = age;
            }
            
            // Adding method to the prototype (shared by all instances)
            Person.prototype.greet = function() {
                return "Hello, my name is " + this.name;
            };
            
            let person3 = new Person("Alice", 25);
            let person4 = new Person("Bob", 30);
            
            console.log(person1.greet()); // Output: Hello, my name is Alice
            console.log(person2.greet()); // Output: Hello, my name is Bob

    // prototype method (the function greet() is stored in the prototype & shared by all instances)
    Person.prototype.greet = function(){
        return "Hello, my name is " + this.name;
    }