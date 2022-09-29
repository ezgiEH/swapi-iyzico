import React from 'react'
import { useParams, Link } from 'react-router-dom'
import FetchStarship from '../api/FetchStarship';
import FetchFilms from '../api/FetchFilms';
import {Container, Stack, Flex, Box, Heading, Text, Button, Image, Divider, Spinner} from '@chakra-ui/react';


function StarshipDetail() {
  // Get the id from the url
  const { id } = useParams()
  // Get the starship data
  const { isLoading, starship} = FetchStarship(id);
  // Get the films data
  const { films } = FetchFilms();

  // get films id from starship
  const allFilms = starship.films?.map((film) => {
    film = film.split('/')[film.split('/').length - 2];
    return film;
  });
  // get films
  const results = films.filter(film => allFilms.includes(film.episode_id.toString()));
  
  return (
    <div className='App'>
      {isLoading ? <Spinner align={'center'} m={10} size='xl' color='white'/> :
        <Container 
          bgGradient={'linear(to-l, blackAlpha.800, transparent)'}
          maxW={'full'}
          px={10}>
          <Stack
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: 'column', md: 'row' }}>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
                zIndex={1}>
              <Box>
                <Image
                  rounded={'lg'}
                  objectFit={'contain'}
                  src={`/assets/ships/${id}.png`}
                />
              </Box>
            </Flex>
          <Stack p={10} flex={1}  spacing={{ base: 5, md: 10 }}  
            backdropFilter={'blur(20px)'} rounded={'2xl'} boxShadow={
                      '0px 1px 25px -5px rgb(255 191 69 / 48%), 0 10px 10px -5px rgb(250 110 10 / 43%)'}>
              <Heading
                color={'white'}
                align={'center'}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                  <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                      content: "''",
                      width: 'full',
                      height: '25%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bg: '#fa6e0a',
                      zIndex: -1,
                    }}>
                    {starship.name}
                  </Text>
                <br />
                <Text fontSize={'2rem'} as={'span'} color={'#fa6e0a'}>
                  Model: {starship.model}
                </Text>
              </Heading>
                <Text color={'white'} align={'center'} lineHeight={2} >
                  <b>Manufacturer:</b> {starship.manufacturer}
                  <Divider />
                  <b>Cost in Credits:</b> {starship.cost_in_credits}
                  <Divider />
                  <b>Length:</b> {starship.length}
                  <Divider />
                  <b>Max Atmosphering Speed:</b> {starship.max_atmosphering_speed}
                  <Divider />
                  <b>Crew:</b> {starship.crew}
                  <Divider />
                  <b>Passengers:</b> {starship.passengers}
                  <Divider />
                  <b>Cargo Capacity:</b> {starship.cargo_capacity}
                  <Divider />
                  <b>Starship Class:</b> {starship.starship_class}
                  <Divider />
                  <b>Hyperdrive Rating:</b> {starship.hyperdrive_rating}
                  <Divider />
                  <b>MGLT:</b> {starship.MGLT}
                  <Divider />
                  <b>Consumables:</b> {starship.consumables}
                  <Divider />
                  <b>Films:</b> {results.map((film, key) => {
                  return <Text key={key}>{film.title}, </Text> })}
                  <Divider />
                </Text>
              <Stack direction={'row'} justifyContent={'center'} p={2}>
                <Link to={'/starships/'}>
                  <Button 
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'#fa6e0a'}
                  color={'white'}
                  boxShadow={
                      '0px 1px 25px -5px rgb(255 191 69 / 48%), 0 10px 10px -5px rgb(250 110 10 / 43%)'
                  }
                  _hover={{
                      bg: '#f03d14',
                  }}
                  _focus={{
                      bg: '#f03d14',
                  }}>
                    BACK TO SHIPS
                 </Button>
                </Link>
                <Link to={'/search/'}>
                  <Button
                      bg={'whiteAlpha.300'}
                      rounded={'full'}
                      color={'white'}
                      _hover={{ bg: 'whiteAlpha.500' }}>
                      Search another one
                  </Button>
                </Link>
              </Stack>
          </Stack>
          </Stack>
        </Container>
      }
    </div>
  )
}

export default StarshipDetail