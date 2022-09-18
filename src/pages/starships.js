import React from 'react'
import Card from '../components/Card'
import { Grid } from '@chakra-ui/react'
import  axios from  'axios';
  import  { useState, useEffect }  from  'react';
//import {FetchStarShips} from '../api/Api'

 
function Starships() {
  

  const [starships, setStarships] = useState([])
  const fetchData = async () => {
  const { data } = await axios.get("https://swapi.dev/api/starships/");
  setStarships(data.results);
};

  useEffect(() => {
  fetchData();
  }, []);


  return (
    <div>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} p="10">
       {
        starships.map((starships, key) => (
          <Card key={key} starships={starships} />
        ))
       }
       
      </Grid>
      
    </div>
  )
}

export default Starships