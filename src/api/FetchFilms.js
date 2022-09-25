import  axios  from   'axios' ;
import  { useState, useEffect }  from   'react' ;

const FetchFilms =  (page)  =>  {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(
                `https://swapi.dev/api/films/${page}`
            );
            setFilms(data);
        };
        getData();
    }, []);
    
    return { films };
    }
export default FetchFilms;