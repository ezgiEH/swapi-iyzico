import axios from "axios";
import { useState, useEffect } from "react";

const FetchStarships = (page) => {
    const [isLoading, setIsLoading] = useState(false);
    const [starships, setStarships] = useState([]); 
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
            `https://swapi.dev/api/starships/?page=${page}`
            );
            setStarships(data.results);
            setIsLoading(false);
        };
        getData();
        setIsLoading(true);
    }, [page]);
    
    return { isLoading, starships };
    }
export default FetchStarships;