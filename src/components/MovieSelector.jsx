import { useState } from "react";

export default function MovieSelector() {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    const FetchMovies = () => {
        //fetch logic
    };

    return (
        <div>
            <select>
                <option value="">Select Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
            </select>

            {/* button */}

            {/* conditional rendering */}
        </div>
    )
}