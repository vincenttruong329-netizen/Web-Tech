import {useState} from "react"; // useState is imported from React because it's a built-in Hook.
import LoginForm from "./LoginForm";
import MovieList from "./MovieList";

function handleClick(name){
    alert(`Hello, ${name}!`);
}


function HandleForm(){
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){
        alert(`Name: ${name} \nEmail: ${email}`);
        setName("");
        ("");

    }

    return(
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={name} 
                onChange={(event)=> setName(event.target.value)}
                placeholder="Enter your name" 
                style={{display: "block", margin: "10px auto", padding: "8px"}} />

                <input type="email" 
                value={email} 
                onChange={(event)=> setEmail(event.target.value)}
                placeholder ="Enter your email" 
                style={{display: "block", margin: "10px auto", padding: "8px"}}/>
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

function HandleInput(){
    const[text,setText] = useState("");

    function handleChange(event){
        setText(event.target.value);
    }

    return(
        <div>
            <h2>Type something</h2>
            <input type ="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    )
    
}


function Counter(){
    const [count, setCount] = useState(0); // useState (0) initializes count with 0

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2>React Counter</h2>
              <p>Count: {count}</p> {/*{count} dynamically displays the current state in the UI.*/}
              <button onClick={() => setCount(count + 1)}>Increase</button> 
              {/*setCount(newValue) updates count and re-renders the component.*/}
              {/*When the button is clicked, setCount(count + 1) increments the count by 1.*/}
              <button onClick={() => setCount(count - 1)}>Decrease</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          );
}


function MainContent() {
          return (
            <main style={{padding: "20px", textAlign: "center", minHeight: "400px"}}>
              <h2>Welcome to My Website</h2>
              <p>This is a simple React app demonstrating component structure.</p>
                <Counter />
                <h2>Click Event Example</h2>
                <button onClick = {() => handleClick("Vincent")}>Click Me</button>
                <HandleInput />
                <HandleForm />
                <LoginForm/>
                <MovieList/>
            </main>
          );
        }
        
        export default MainContent;