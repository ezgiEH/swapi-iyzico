import axios from 'axios'
import { useState, useEffect } from 'react'



export const FetchStarShips = async () => {

  const [starships, setStarships] = useState([])
  const fetchData = async () => {
  const { data } = await axios.get("https://swapi.dev/api/starships/");
  setStarships(data.results);
};

  useEffect(() => {
  fetchData();
  }, []);

  return starships;
}


export const FetchStarShipsDetail = async (id) => {

  const [starship, setStarship] = useState([])
  const fetchData = async () => {
  const { data } = await axios.get(`https://swapi.dev/api/starships/${id}/`);
  setStarship(data);
};

  useEffect(() => {
  fetchData();
  }, []);

  return starship;
}