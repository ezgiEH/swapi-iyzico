import React from 'react'
import 'react-star-wars-crawl/lib/index.css'
import {
  Container,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Image,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';



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
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
      <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
        <Image src={'../assets/star-wars-logo.png'} alt={'logo'}  />
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          eiusmod tempor
        </Text>
        <Stack direction={'row'}>
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'blue.500' }}>
            Show me more
          </Button>
          <Button
            bg={'whiteAlpha.300'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}>
            Show me more
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
  )
}

export default Home