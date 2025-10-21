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

        const movieData = {
            Comedy: ["The Big Lebowski", "Borat", "Dr. Strangelove"],
            Crime: ["Reservoir Dogs", "Donnie Brasco", "Goodfellas"],
            Horror: ["The Thing", "The Lighthouse", "Alien"]
        };
        // TODO handle error event if no genre is selected 
        // TODO handle a loading message while the app "fetches" movie data.


        setMovies(movieData[selectedGenre]);
        setIsLoading(false);
    };

    return (
        <div>
            <select value={selectedGenre}
            // TODO add onChange event handler
            >
                <option value="">Select Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
            </select>

            <button onClick={FetchMovies}>Fetch Movies</button>

            {/* TODO conditional rendering */}
            {/* TODO display error message */}
            {/* TODO dusplay loading message */}
        </div>
    )
}