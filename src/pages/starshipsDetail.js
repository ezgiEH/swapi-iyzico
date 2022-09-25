import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  Spinner
} from '@chakra-ui/react';
import FetchStarship from '../api/FetchStarship';
// import FetchFilms from '../api/FetchFilms';
import {useEffect, useState} from 'react'
import axios from 'axios';

function StarshipDetail() {

  const { id } = useParams()
  const { isLoading, starship} = FetchStarship(id);
  // const { films } = FetchFilms(starship.films);
  const [films, setFilms] = useState([])


  const fetchFilms = async () => {
    const { data } = await axios.get(`${starship.films[0]}`);
    setFilms(data);
  };
  useEffect(() => {
    fetchFilms();
  }, [starship.films]);

  
  return (
    <div className='App'>
      {isLoading ? <Spinner aligm={'center'} m={10} size='xl' /> :
        <Container 
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
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'220px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 15,
                  left: 0,
                  backgroundImage: `url('/assets/ships/${id}.png')`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  objectFit={'contain'}
                  src={`/assets/ships/${id}.png`}
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}  backdropFilter={'blur(20px)'} rounded={'2xl'} boxShadow={
                      '0px 1px 25px -5px rgb(255 191 69 / 48%), 0 10px 10px -5px rgb(250 110 10 / 43%)'
                    }>
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
                    height: '30%',
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
              <Text color={'#ffffff'} align={'center'} lineHeight={2}>
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
                <b>Films:</b> {films.title}
                <Divider />
              </Text>
              <Stack direction={'row'} justifyContent={'center'} p={2}>
                <Link to={'/starships/'}>
                  <Button
                    maxW={'200px'}
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
          <Text color={'yellow.400'} pb={10}>
            <Heading  as="h2" size="lg" textAlign="center" m={5}>
              Opening Crawl
            </Heading>
            " {films.opening_crawl} "
          </Text>
        </Container>
      }
    </div>
  )
}

export default StarshipDetail