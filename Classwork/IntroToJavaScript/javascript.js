// javascript function
function my_function() {
	    let firstName = prompt("What is your first name?");
	    let lastName = prompt("What is your last name?");
	    let fullName = firstName + ' ' + lastName;

        //  the confirm function displays a popup dialog with "ok and cancel" buttons. it returns boolean values
	    let userConfirmed = confirm("Hello!" + fullName + " Welcome to CSCI4410/5410! Click OK to continue.");
	    
	    if (userConfirmed) {
		alert("You clicked OK! Enjoy the course.");
		console.log(fullName + " has joined the course.");
	    } else {
		alert("You clicked Cancel. Let us know if you need help.");
		console.log(fullName + " declined to continue.");
	    }
}   

// loose equality (==) vs strict equality (===_)
    console.log(5 == "5");   // true (loose equality, only checks value)
    console.log(5 === "5");  // false (strict equality, checks value and type)

// ternary operator (? :)
    let age = prompt("What is your age?")
    // prompt(gives a pop up asking the question & storing it into the variable)
    let status = (age >= 18) ? "Adult" : "Minor";
    console.log(status); // Output: "Adult"

// working with data types
    // Undefined: a variable without a value, has the value undefined
    // * An empty value has nothing to do with undefined.
        // let car;         // Value is undefined, type is undefined
        // let car = "";    // The value is "", the typeof is "string"

    // object (can contain an object, array, date)
    let person = {firstName: "John", lastName: "Doe"};
    console.log(typeof person);
    // array (special type of object)
    let numbers = [1,2,3];
    console.log(typeof numbers);
    // function data type
    function greet(){
        return "Hello";
    }
    console.log(typeof greet);
// function invocation
    // this is when the function is invoked (called) from javascript code
        function greet(){
            console.log("Hello. This is the greet function invocation");
        }
        // function is invoked
        greet();
    // this is when an event occurs (aka when the user clicks a button)
        function showMessage() {
            alert("Button Clicked! Function Invoked.");
        }
    // this is when it is invoked with an Event listener
        //Using addEventListener()
            function showAlert() {
            alert("Function invoked using an event listener!");
        }
        // Add event listener to the button
        document.getElementById("myButton").addEventListener("click", showAlert);

// selecting and modifying DOM elements
let title = document.getElementById("heading");
			console.log(title.innerHTML); // Output: Hello

// query selector basically seelects the first matching html element, not all of them 
    // Selecting an Element by ID
	let title1 = document.querySelector("#myTitle"); // Selects the first element with ID "myTitle"
    console.log(title1.innerHTML);
	// Selecting an Element by Class
	let box = document.querySelector(".box"); // Selects the first element with class "box"
    console.log(box.innerHTML);
	//Selecting an Element by Tag Name
	let firstParagraph = document.querySelector("p"); // Selects the first <p> tag
    console.log(firstParagraph.innerHTML);
	// Selecting an Element by a Nested Selector
	let firstItem = document.querySelector("ul li"); // Selects the first <li> inside <ul>
    console.log(firstItem.innerHTML);

// this is the query selector all method. it selects multiple elements by their id
function changeText() {
			// Select multiple IDs
			let elements = document.querySelectorAll("#title1, #title2, #title3"); 
		
			elements.forEach(element => {
			    element.innerHTML = "Updated Heading"; // Change text
			    element.style.color = "blue"; // Change color
			});
		}

// this is changing the content & style using innerHTML & style of DOM elements 
document.getElementById("heading").addEventListener("click", function() {
			    // Change Content
			    document.getElementById("heading").innerHTML = "Hello, JavaScript!";

			    // Apply Multiple Style Changes
			    document.getElementById("heading").style.color = "blue";  
});