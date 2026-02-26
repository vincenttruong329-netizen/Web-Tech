import React from "react";

function App(){
  const imageURL = "https://i.imgur.com/NUyttbnb.jpg";
  const inputPlaceholder="Type here...";
  const isButtonDisabled = true;
  const textStyles = {color: "blue", fontSize: "18px", backgroundColor: "lightgray"};

  const name = "Vincent";
  return (
    // this is called a React Fragment (these are invisble wrappers)
    // <>
    //   <h1>Title</h1>
    //   <p>Paragraph</p>
    //   {/* this is essentially using javascript and html together. 
    //   This is the power of React */}
    //   <h1>Hello, {name}</h1>
    // </>
    <div className="container">
        <h1 style={textStyles}>Hello, JSX Attributes!</h1>
        <img src={imageUrl} alt="Sample" width="300" />
        <br /> {/* a break line*/}
        <input type="text" placeholder={inputPlaceholder} />
        {/* {"\u00A0".repeat(5)} repeats the space 5 times */}
        <button disabled={isButtonDisabled}>Click Me</button>
      </div>
  );
}
export default App;

