import React from 'react'
import 'react-star-wars-crawl/lib/index.css'
import {
  Flex,
  Stack,
  Text,
  Button,
  Image,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(../assets/home-bg.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-l, blackAlpha.800, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
          <Image src={'../assets/star-wars-logo.png'} alt={'logo'} />
          <Text
            align={'center'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Hello there !
            <br /> Welcome to my swapi project.
          </Text>
          <Stack direction={'row'}>
            <Link to="/starships">
              <Button
                bg={'#fa6e0a'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: '#f03d14' }}>
                Show Starships
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                About Me
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Home