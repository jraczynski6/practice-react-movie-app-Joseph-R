import { useState } from "react";

export default function MovieSelector() {
    // state variables
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    // TODO fetch logic 
    const FetchMovies = () => {

        setIsLoading(true);
        setMovies([]);
        setError("");

        const movieData = {
            Comedy: ["The Big Lebowski", "Borat", "Dr. Strangelove"],
            Crime: ["Reservoir Dogs", "Donnie Brasco", "Goodfellas"],
            Horror: ["The Thing", "The Lighthouse", "Alien"]
        };
        
        if (!selectedGenre) {
            setError("Error. Please select a genre.");
            setIsLoading(false);
            return;
        };

        setMovies(movieData[selectedGenre]);
        setIsLoading(false);
    };

    return (
        <div>
            <select 
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
            >
                <option value="">Select Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Horror">Horror</option>
            </select>

            <button onClick={FetchMovies}>Fetch Movies</button>

            {/* conditional rendering */}
            {isLoading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {!isLoading && movies.length > 0 && (
                <ul>
                   {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                   ))} 
                </ul>
            )}
        </div>
    )
}