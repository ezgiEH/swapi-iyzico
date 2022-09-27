import axios from "axios";
import { useState, useEffect } from "react";

const FetchStarship = (id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [starship, setStarship] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                `https://swapi.dev/api/starships/${id}/`
            );
            setStarship(data);
            setIsLoading(false);
        };
        
        getData();
        setIsLoading(true);
    }, [id]);
    
    return { isLoading, starship};
    }
export default FetchStarship;