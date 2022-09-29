import React from 'react'
import Card from '../components/Card'
import { SimpleGrid, Button, Heading, Spinner } from '@chakra-ui/react'
import { useState } from 'react';
import FetchStarships from '../api/FetchStarships';



function Starships() {
  // Get the starships data
  const [page, setPage] = useState(1);
  const { isLoading, starships } = FetchStarships(page);

  return (
    <div className='App'>
      <Heading fontSize={50} p={30} fontFamily={'Poller One'} >Starships</Heading>
      {isLoading ? <Spinner m={10} size='xl' color={'white'} /> :
        <SimpleGrid minChildWidth='300px' spacing='20px' w={'full'} p={0}>
          {
            starships.map((starships, key) => (
              <Card key={key} starships={starships} />
            ))
          }
        </SimpleGrid >
      }
      <SimpleGrid minChildWidth='80px' spacing='20px' p={10} alignItems={'center'}>
        {page > 1 ? <Button onClick={() => setPage(page - 1)}>PREV</Button> : <Button disabled>PREV</Button>}
        <Heading fontSize={20} color={'white'} fontFamily={'Poller One'} >PAGE {page}</Heading>
        {page < 4 ?
          <Button onClick={() => setPage(page + 1)}>NEXT</Button> : <Button disabled>NEXT</Button>}
      </SimpleGrid >
    </div>
  )
}

export default Starships