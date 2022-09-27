import { useState, useEffect } from 'react';
import { Input, List, ListItem, Button, Container, SimpleGrid, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import FetchStarships from '../api/FetchStarships';

function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const page = [1, 2, 3, 4];
    const allStarships = [];

    page.forEach(async (page) => {
        const { starships } = FetchStarships(page);
        allStarships.push(...starships);
    });

    function getId(url) {
        return url.split('/')[url.split('/').length - 2]
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = allStarships.filter(starship =>
            starship.name.toLowerCase().includes(searchTerm)
        );
        { searchTerm.length > 0 ? (setSearchResults(results)) : (setSearchResults([])) }
    }, [searchTerm]);

    

    return (
        <div className='App' >
            <Container p={10} maxW='container.lg' h={'100vh'}>
                <Heading fontSize={40} p={30} fontFamily={'Poller One'}>Search Starships</Heading>
                <Input
                    backdropFilter={'blur(20px)'}
                    mb={10}
                    type="text"
                    color={'white'}
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <SimpleGrid minChildWidth='160px' spacing='60px'>
                    {searchResults.map(item => (
                        <List>
                            <ListItem m={3}>
                                <Link to={`/starships/${getId(item.url)}`}>
                                    <Button className='css-127g87k' 
                                        key={item.name}
                                        >
                                        {item.name}
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default Search