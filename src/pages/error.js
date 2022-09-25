import React from 'react'
import { Container, Highlight, Heading, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='App'>
      <Container w={'full'} h={'100vh'}>
        <Heading lineHeight='tall' pt={40}>
          <Highlight
            query='spotlight'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          > 404 
            Page not found
            Sorry, the page you are looking for does not exist.
          </Highlight>
        </Heading>
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
      </Container>
    </div>
  )
}

export default Error