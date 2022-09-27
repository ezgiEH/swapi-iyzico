import axios from 'axios';
import { useState, useEffect } from 'react';


const FetchFilms = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                `https://swapi.dev/api/films/`
            );
            setFilms(data.results);
           
        };
        getData();
        
    }, []);

    return { films };
}
export default FetchFilms;