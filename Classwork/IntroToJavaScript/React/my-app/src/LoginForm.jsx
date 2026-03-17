import { useState } from "react";

    function LoginForm() {
      const [isLoggedIn, setIsLoggedIn] = useState(false); // Controls login state
      const [username, setUsername] = useState(""); // Stores username input
      const [email, setEmail] = useState(""); // Stores email input
      const [error, setError] = useState(""); // Stores validation error message
    
      function isValidUsername(username) {
        return /^[a-zA-Z0-9_]+$/.test(username); // Allows letters, numbers, and underscores only
      }
    
      function handleLogin(event) {
        event.preventDefault(); // Prevent page reload
        if (!username || !email) {
          setError("Both fields are required.");
          return;
        }
    
        if (!isValidUsername(username)) {
          setError("Username can only contain letters, numbers, and underscores.");
          return;
        }
    
        setError(""); // Clear errors if valid
        setIsLoggedIn(true);
      }
    
      function handleLogout() {
        setIsLoggedIn(false);
        setUsername(""); // Clear input fields
        setEmail("");
        setError("");
      }
    
      return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>{isLoggedIn ? `Welcome, ${username}!` : "Please Log In"}</h2>
    
          {!isLoggedIn ? (
            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                style={{ display: "block", margin: "10px auto", padding: "8px" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{ display: "block", margin: "10px auto", padding: "8px" }}
              />
              <button type="submit">Log In</button>
              {/*Short-Circuit Evaluation*/}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          ) : (
            <button onClick={handleLogout}>Log Out</button>
          )}
        </div>
      );
    }
    
    export default LoginForm;