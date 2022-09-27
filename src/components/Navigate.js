import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/home';
import Starships from '../pages/starships';
import Contact from '../pages/contact';
import Error from '../pages/error';
import StarshipsDetail from '../pages/starshipsDetail';
import Search from './Search';
import { Box, Flex, Avatar, HStack, Image, Menu, useDisclosure, useColorModeValue, Stack, Heading, Text } from '@chakra-ui/react'
import { FaArrowRight} from 'react-icons/fa'


function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Router>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} p={2} className='starjedi'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Image
              height={8}
              src = '../assets/menu.png'
              size={'md'}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Link to="/">
                  <Image
                    p={2}
                    height={24}
                    objectFit="contain"
                    src="../assets/swlogo.png"
                    alt="Swapi"
                  />
                </Link>
              </Box>
            <HStack 
              as={'nav'}
              spacing={20}
              display={{ base: 'none', md: 'flex' }}>
                 <Heading fontSize={20} pr={10} >May the force be with you!</Heading>
              <HStack className='css-vsam2o'>
                  <Box>
                    <Link to="/starships">Starships</Link>
                  </Box>
            </HStack>
            <HStack className='css-vsam2o'>
                  <Box >
                    <Link to="/Search">Search</Link>
                  </Box>
            </HStack>
          </HStack>
        </HStack>
          <Flex alignItems={'center'} >
            <Menu>
              <Box display={{ base: 'none', md: 'flex' }} >
                <FaArrowRight />
                  <Text
                    fontSize={'lg'}
                    color={'black'}
                    position={'absolute'}
                    right={'85px'}
                    top={'15px'}
                    transform={'rotate(-10deg)'}
                    _hover={{
                      bg: '#fa6e0a',
                    }}>
                    Contact Me
                  </Text>
              </Box>
              <Link to="/contact"><Avatar
                  m={4}
                  size={'md'}
                  src={
                    'https://avatars.githubusercontent.com/u/20560655?v=4'
                  }
                />
                </Link>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box p={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <HStack className='css-vsam2o'>
                <Box>
                  <Link to="/starships" >Starships</Link>
                </Box>
              </HStack>
              <HStack className='css-vsam2o'>
                  <Box >
                    <Link to="/Search">Search</Link>
                  </Box>
              </HStack>
            </Stack> 
          </Box>
        ) : null}
      </Box>
      <Box >
        
      </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/starships/:id' element={<StarshipsDetail />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;