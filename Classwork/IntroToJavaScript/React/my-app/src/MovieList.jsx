import { useState, useEffect } from "react";

        function MovieList() {
          const [movies, setMovies] = useState([]); // State to store movie data
          const [loading, setLoading] = useState(true); // State to track loading status
        
          useEffect(() => {
            fetch("https://api.tvmaze.com/shows") // Fetches a list of TV shows
              .then((response) => response.json()) // Convert response to JSON
              .then((data) => {
                setMovies(data.slice(0, 10)); // Store only the first 10 movies
                setLoading(false); // Stop loading
              })
              .catch((error) => console.error("Error fetching movie data:", error));
          }, []); // Empty dependency array → Runs only once when the component mounts
        
          return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2>Top 10 Movies</h2>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {movies.map((movie) => (
                    <li key={movie.id} style={{ marginBottom: "15px", padding: "10px", 
                        border: "1px solid #ddd" }}>
                      <strong>{movie.name}</strong> <br />
                      <img src={movie.image?.medium} alt={movie.name} style={{ borderRadius: "10px", 
                        marginTop: "5px" }} />
                      <p><strong>Genre:</strong> {movie.genres.join(", ")}</p>
                      <p><strong>Premiered:</strong> {movie.premiered}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }
        
        export default MovieList;