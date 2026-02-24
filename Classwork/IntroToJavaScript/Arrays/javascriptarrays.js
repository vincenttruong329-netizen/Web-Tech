// Array Properties & Methods

//The length property returns the number of elements
    let cars = ["Toyota", "Honda", "Ford", "BMW"];
    let carLength = cars.length;

// the sort() method sorts the array alphabetically (A -> Z)
    let carsSort = cars.sort();
    console.log(carsSort);

// The pop() method removes (and returns) the last element from an array:
    let cars1=["BMW", "Volvo", "Saab"];
    cars1.pop();

// The push() method adds a new element to an array (at the end):
    let cars2=["BMW", "Volvo", "Saab"];
    cars2.push("Honda");

// The unshift() method adds a new element to an array (at the beginning):
    let cars3=["BMW", "Volvo", "Saab"];
    cars3.unshift("Nissan");

// The shift() method removes (and returns) the first element from an array:
    let cars4=["BMW", "Volvo", "Saab"];
    cars4.shift();

// Javascript Arrays:
    // Creating an array of objects
        let people = [
            { name: "Alice", age: 25, city: "New York" },
            { name: "Bob", age: 30, city: "Los Angeles" },
            { name: "Charlie", age: 35, city: "Chicago" }
        ];
        console.log(people);

    // Accessing objects in an array
        console.log(people[0]); // Output: { name: "Alice", age: 25, city: "New York" }
        console.log(people[1].name); // Output: Bob
        console.log(people[2]["city"]); // Output: Chicago
    
    // Looping Through an Array of Objects
        //  Using forEach() (Recommended)
            people.forEach(person => {
                console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
            });
                    
        // Using for...of Loop
            for (let person of people) {
                console.log(person.name);
            }

        // Using for Loop with Index
            for (let i = 0; i < people.length; i++) {
                console.log(people[i].city);
            }

// Creating an Array of Objects using a Constructor
    function Car(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        
    let cars5 = [
        new Car("Toyota", "Corolla", 2022),
        new Car("Honda", "Fit", "2010"),
        new Car("Honda", "Civic", 2023)
    ];
        
    console.log(cars5[0].model); // Output: "Corolla"

// Sorting an Array of Objects in JavaScript
    // Sorting Numbers (Using a Compare Function)

    // Ascending Order (Smallest to Largest)
    let numbers = [245, 28, 139];
    numbers.sort((a, b) => a - b);
    console.log(numbers);

    // Descending Order (Largest to Smallest)
    let numbers1 = [245, 28, 139];
    numbers1.sort((a, b) => b - a);
    console.log(numbers1);

// Sorting an Array of Objects
    // Sort by a String Property
        // Sort by name alphabetically in Ascending Order (A -> Z)
        let people0 = [
        { name: "Charlie", age: 35 },
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
        ];
        people0.sort((a, b) => a.name.localeCompare(b.name));
        console.log(people0);

    // Sort by name alphabetically in Descending Order (Z -> A)
        let people1 = [
        { name: "Charlie", age: 35 },
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
        ];
        people1.sort((a, b) => b.name.localeCompare(a.name));
        console.log(people1);

    // Sort by a Numeric Property
        // Sort by age (Ascending)
        people1.sort((a, b) => a.age - b.age);
        console.log(people1);

        //Sort by age (Descending)
        people1.sort((a, b) => b.age - a.age);
        console.log(people1);

    // Sorting by Multiple Criteria
        people2.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age;
        });
        //Sorts by age, and if two people have the same age, it sorts by name.

    // Sorting Dates
        let events = [
        { title: "Event A", date: "2024-06-10" },
        { title: "Event B", date: "2023-12-05" },
        { title: "Event C", date: "2025-01-15" }
        ];

    // Sort by date (Oldest to Newest)
        events.sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log(events);

    // Sort by date (Newest to Oldest)
        events.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(events);
// Sorting without modifying the original array
    // Using slice() or the spread operator([...]) to create a sorted copy
            let numbers6 = [100, 20, 3];
			// Create a sorted copy using spread operator [...array]
			let sortedNumbers = [...numbers6].sort((a, b) => a - b);
			
			console.log(numbers6);       // Original: [100, 20, 3]
			console.log(sortedNumbers); // Sorted Copy: [3, 20, 100]
		
			let numbers7 = [100, 20, 3];
			// Create a sorted copy using slice()
			let sortedNumbers1 = numbers7.slice().sort((a, b) => a - b);
			
			console.log(numbers7);       // Original: [100, 20, 3]
			console.log(sortedNumbers1); // Sorted Copy: [3, 20, 100]

// Reverse a Sorted Array
    let sortedNumbers2 = [1, 3, 20, 100];
    sortedNumbers.reverse();
    console.log(sortedNumbers2);

