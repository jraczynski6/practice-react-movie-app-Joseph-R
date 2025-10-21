import { useState } from "react";

export default function MovieSelector() {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    const FetchMovies = () => {
        //fetch logic

        setIsLoading(true);

        const movieData = {
            Comedy: ["The Big Lebowski", "Borat", "Dr. Strangelove"],
            Crime: ["Reservoir Dogs", "Donnie Brasco", "Goodfellas"],
            Horror: ["The Thing", "The Lighthouse", "Alien"]
        };
        
        setIsLoading(false);
    };

    return (
        <div>
            <select>
                <option value="">Select Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
            </select>

            <button onClick={FetchMovies}>Fetch Movies</button>

            {/* conditional rendering */}
        </div>
    )
}