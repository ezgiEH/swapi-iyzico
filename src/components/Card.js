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
                            height={'230px'}
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
                                maxW={'230px'}
                                objectFit={'contain'}
                                src={`/assets/ships/${id}.png`}
                            />
                        </Box>
                        <Stack pt={10} align={'center'} height={200} >
                            
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                MODEL
                            </Text>
                            <Heading color={'gray.800'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                {starships.name}
                            </Heading>
                            <br />
                            <Stack direction={'row'} align={'center'} >
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