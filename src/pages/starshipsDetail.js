import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
//import { FetchStarShipsDetail} from '../api/Api'

function StarshipDetail() {

    const {id} = useParams()
    const [starship, setStarship] = useState([])
  const fetchData = async () => {
  const { data } = await axios.get(`https://swapi.dev/api/starships/${id}/`);
  setStarship(data);
};

  useEffect(() => {
  fetchData();
  }, []);

  return (
    <div>Starship Detail
      <h1>
        {id}
        {starship.name}
        {starship.model}
        {starship.manufacturer}
        {starship.cost_in_credits}
        {starship.length}
        {starship.max_atmosphering_speed}
        {starship.crew}
        {starship.passengers}
        {starship.cargo_capacity}
        {starship.consumables}
        {starship.hyperdrive_rating}
        {starship.MGLT}
        {starship.starship_class}
      </h1>
    </div>
  )
}

export default StarshipDetail