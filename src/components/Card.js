import {Box, Image, Heading, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Card ({starships}) {
    function getId(url) {
        return url.split('/')[url.split('/').length - 2]
        }
        const id = getId(starships.url) 
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
           <Link to={`/starships/${id}`} >
            <Image src="https://bit.ly/2Z4KKcF" alt="Star Wars Ships" loading="lazy"/>
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Heading as="h4" size="md" color="yellow.500" isTruncated>
                            {starships.name}
                        </Heading>
                    </Box> 
                    <Box d="flex" mt="2" alignItems="center">
                    <Button mt="2" colorScheme="yellow" size="sm" >
                        View
                    </Button>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}
export default Card