import { Box, Image, Heading, Button, Center, Stack, Text, useColorModeValue, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Card({ starships }) {
    
    function getId(url) {
        return url.split('/')[url.split('/').length - 2]
    }
    const id = getId(starships.url)
    
    return (
        <GridItem w='100%' h='100%' >
            <Center py={10}>
                <Link to={`/starships/${id}`} >
                    <Box role={'group'}
                        p={6}
                        maxW={'300px'}
                        maxH={'420px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.100')}
                        boxShadow={'2xl'}
                        rounded={'2xl'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'180px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 15,
                                left: 0,
                                backgroundImage: `url('/assets/ships/${id}.png')`,
                                filter: 'blur(25px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(40px)',
                                },
                            }}>
                            <Image 
                                h={'300px'}
                                rounded={'lg'}
                                maxW={'240px'}
                                objectFit={'contain'}
                                src={`/assets/ships/${id}.png`}
                            />
                        </Box>
                        <Stack mt={10} align={'center'} h={200} justify={'end'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                MODEL
                            </Text>
                            <Heading color={'gray.800'} fontSize={'2xl'} fontFamily={'Poller One'} fontWeight={500}>
                                {starships.name}
                            </Heading>
                            <br />
                            <Stack direction={'row'} align={'center'} >
                                <Button className='css-127g87k'>
                                    View Details                                   
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Link>

            </Center>
        </GridItem>
    )
}
export default Card